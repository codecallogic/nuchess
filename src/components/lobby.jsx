import React, {useState, useEffect, useRef} from 'react';
import {
  RSocketClient,
  JsonSerializer,
  IdentitySerializer
} from 'rsocket-core';
import RSocketWebSocketClient from 'rsocket-websocket-client';
import lobbyData from '../services/lobbies.json'

const Lobby = () => {

  const [table, setTable] = useState(false)
  const [lobby, setLobby] = useState(lobbyData)
  const [type, setType] = useState(null)
  const [stream, setData] = useState([])

  const ref = useRef()

  useEffect( () => {
    console.log(stream)
  })

  const createTable = (e) => {
    setTable(!table)
  }

  const handleClickOutside = (e) => {
    if(ref.current && !ref.current.contains(e.target)){
      setTable(!table)
    }
  }

  // Create an instance of a client
  const client = new RSocketClient({
    serializers: {
      data: JsonSerializer,
      metadata: IdentitySerializer
    },
    setup: {
      // ms btw sending keepalive to server
      keepAlive: 60000,
      // ms timeout if no keepalive response
      lifetime: 180000,
      // format of `data`
      dataMimeType: 'application/json',
      // format of `metadata`
      metadataMimeType: 'message/x.rsocket.routing.v0',
    },
    transport: new RSocketWebSocketClient({
      url: 'ws://localhost:8080/tweetsocket'
    }),
  });
  
  // Open the connection
  client.connect().subscribe({
    onComplete: socket => {
      // socket provides the rsocket interactions fire/forget, request/response,
      // request/stream, etc as well as methods to close the socket.
      socket.requestStream({
        data: {
          'author': 'linustorvalds'
        },
        metadata: String.fromCharCode('tweets.by.author'.length) + 'tweets.by.author',
      }).subscribe({
        onComplete: () => console.log('complete'),
        onError: error => {
          if(error) console.log(error);
        },
        onNext: payload => {
          // console.log(payload.data)
          // const newLobbies = stream.concat(payload.data)

          // // console.log(newLobbies)
          
          // setData( result => [...result, newLobbies])
        },
        onSubscribe: subscription => {
          console.log(subscription)
          subscription.request(2147483647);
        },
      });
    },
    onError: error => {
      if(error) console.log(error);
    },
    onSubscribe: cancel => {
      // console.log(cancel)
      /* call cancel() to abort */
    }
  });
  
  const selectType = (e) => {
    if(e == 'all') return setType(null)
    setType(e)
  }
  
  return (
    <div className="lobby-container">
      <div className="lobby">
        <div className="lobby-stats">
          <div className="lobby-stats-left">
            <div className="lobby-stats-left-item" onClick={ () => selectType('all') }>
              <svg className="lobby-stats-left-item-icon">
                <use xlinkHref="/sprite.svg#icon-th-small"></use>
              </svg>
              <span>All</span>
            </div>
            <div className="lobby-stats-left-item" onClick={ () => selectType('unranked') }>
              <svg className="lobby-stats-left-item-icon">
                <use xlinkHref="/sprite.svg#icon-hash"></use>
              </svg>
              <span>23 un-ranked</span>
            </div>
            <div className="lobby-stats-left-item" onClick={ () => selectType('ranked') }>
              <svg className="lobby-stats-left-item-icon">
                <use xlinkHref="/sprite.svg#icon-stats-bars"></use>
              </svg>
              <span>47 ranked</span>
            </div>
            <div className="lobby-stats-left-item" onClick={ () => selectType('wager') }>
              <svg className="lobby-stats-left-item-icon">
                <use xlinkHref="/sprite.svg#icon-dollar"></use>
              </svg>
              <span>195 bets</span>
            </div>
          </div>
          <div className="lobby-stats-right">
            <div className="lobby-stats-right-item">
              <svg className="lobby-stats-right-item-icon">
                <use xlinkHref="/sprite.svg#icon-thumb-up"></use>
              </svg>
              <span>wagers enabled</span>
            </div>
            <div className="lobby-stats-right-item">
              <svg className="lobby-stats-right-item-icon">
                <use xlinkHref="/sprite.svg#icon-coins"></use>
              </svg>
              <span>7 coins remaining</span>
            </div>
          </div>
        </div>
        <div className="lobby-grid">
          <div className="lobby-grid-item lobby-controls">
            <div className="lobby-grid-item-controls-create" onClick={createTable}><span>create new table</span></div>
            <div className="lobby-grid-item-controls-join"><span>join private table</span></div>
          </div>
          {lobbyData !== null && type == null && lobbyData.map( (data, i) => {
             return <div key={i} className={`lobby-grid-item all`}>{data.type}</div>
          })}
          {lobbyData !== null && lobbyData.map( (data, i) => {
             return data.type == type ? 
              <div key={i} className={`lobby-grid-item ` + data.type}>{data.type}</div>
              :
              null
          })}
        </div>
      </div>
      {table !== false && 
      <div className="lobby-bg-modal" onClick={handleClickOutside}>
        <div className="lobby-modal-content" ref={ref}>
          <div className="lobby-modal-content-heading">
            <span>Table Settings</span>
            <div className="lobby-modal-content-heading-toggle">
                <svg onClick={createTable}>
                  <use xlinkHref="sprite.svg#icon-cross"></use>
                </svg>
            </div>
          </div>
          <div className="lobby-modal-content-settings-container">
            <div className="lobby-modal-content-settings-group">
              <label htmlFor="table">Table name</label>
              <input type="text" name="table"/>
            </div>
            <div className="lobby-modal-content-settings-group">
              <label htmlFor="type">Game Type</label>
              <select name="type">
                <option value="ranked">Ranked</option>
                <option value="unranked">Unranked</option>
                <option value="bet">Bet</option>
              </select>
            </div>
            <div className="lobby-modal-content-settings-group">
              <label htmlFor="private">Is this table private?
                <input type="checkbox" name="private"/>
                <span></span>
                <div>
                <svg>
                  <use xlinkHref="sprite.svg#icon-checkmark"></use>
                </svg>
                </div>
              </label>
            </div>
            <div className="lobby-modal-content-settings-group">
              <label htmlFor="wager">Is this table a wager?
                <input type="checkbox" name="wager"/>
                <span></span>
                <div>
                <svg>
                  <use xlinkHref="sprite.svg#icon-checkmark"></use>
                </svg>
                </div>
              </label>
            </div>
            <div className="lobby-modal-content-settings-group">
              <label htmlFor="wager-amount">Wager amount</label>
              <input type="number" name="wager-amount"/>
            </div>
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default Lobby
