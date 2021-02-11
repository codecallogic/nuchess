import React, {useState, useEffect} from 'react';

const Lobby = ({}) => {
  
  return (
    <div className="lobby-container">
      <div className="lobby">
        <div className="lobby-stats">
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
            <div className="lobby-grid-item-controls-create"><span>create new table</span></div>
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
    </div>
  )
}

export default Lobby
