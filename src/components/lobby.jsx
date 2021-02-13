import React, {useState, useEffect, useRef} from 'react';

const Lobby = ({}) => {

  const [table, setTable] = useState(false)

  const ref = useRef()

  useEffect(() => {
    console.log('Hello')
  }, [ref])

  const createTable = (e) => {
    setTable(!table)
  }

  const handleClickOutside = (e) => {
    if(ref.current && !ref.current.contains(e.target)){
      setTable(!table)
    }
  }
  
  return (
    <div className="lobby-container">
      <div className="lobby">
        <div className="lobby-stats">
          <div className="lobby-stats-left-item">
            <svg className="lobby-stats-left-item-icon">
              <use xlinkHref="/sprite.svg#icon-hash"></use>
            </svg>
            <span>All</span>
          </div>
          <div className="lobby-stats-left">
            <div className="lobby-stats-left-item">
              <svg className="lobby-stats-left-item-icon">
                <use xlinkHref="/sprite.svg#icon-hash"></use>
              </svg>
              <span>23 un-ranked</span>
            </div>
            <div className="lobby-stats-left-item">
              <svg className="lobby-stats-left-item-icon">
                <use xlinkHref="/sprite.svg#icon-stats-bars"></use>
              </svg>
              <span>47 ranked</span>
            </div>
            <div className="lobby-stats-left-item">
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
          <div className="lobby-grid-item"></div>
          <div className="lobby-grid-item"></div>
          <div className="lobby-grid-item"></div>
          <div className="lobby-grid-item"></div>
          <div className="lobby-grid-item"></div>
          <div className="lobby-grid-item"></div>
          <div className="lobby-grid-item"></div>
          <div className="lobby-grid-item"></div>
          <div className="lobby-grid-item"></div>
          <div className="lobby-grid-item"></div>
          <div className="lobby-grid-item"></div>
          <div className="lobby-grid-item"></div>
          <div className="lobby-grid-item"></div>
          <div className="lobby-grid-item"></div>
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
