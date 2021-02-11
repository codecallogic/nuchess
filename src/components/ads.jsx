import React, {useState, useEffect} from 'react';

const Ads = ({}) => {
  
  return (
    <div className="ads-container">
      <div className="ads">
        <div className="ads-online">
          <div><span>1.92m</span>Players Online</div>
          <div><span>563k</span>Games Played</div>
        </div>
        <img src="/banner.png" className="ads-banner"></img>
      </div>
    </div>
  )
}

export default Ads
