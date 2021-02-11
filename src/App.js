import React, {useState, useEffect} from 'react';
import Nav from './components/nav';
import Lobby from './components/lobby'
import Twitch from './components/twitch'
import Search from './components/search'
import Ads from './components/ads'
import {
  RSocketClient,
  JsonSerializer,
  IdentitySerializer
} from 'rsocket-core';
import RSocketWebSocketClient from 'rsocket-websocket-client';
import "./App.css"

const App = () => {

  const [state, setState] = useState({
    messages: []
  })

  const {messages} = state

  useEffect(() => {
    console.log(messages)
  }, [messages])

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
          'origin': 'local react app',
          'interaction': 'STREAM'
        },
        metadata: String.fromCharCode('tweets.by.author'.length) + 'tweets.by.author',
      }).subscribe({
        onComplete: () => console.log('complete'),
        onError: error => {
          if(error) console.log(error);
        },
        onNext: payload => {
          console.log(payload.data)
          // setState( prevState => ({...prevState, messages: payload.data}))
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
  
  return (
    <>
     <Nav></Nav>
     <div className="homepage-container">
      <Lobby></Lobby>
      <Twitch></Twitch>
      <Search></Search>
      <Ads></Ads>
     </div>
    </>
  )
}

export default App

