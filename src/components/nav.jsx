import React, {useState, useEffect} from 'react';

const Nav = ({}) => {
  
  return (
    <div className="nav-container">
      <div className="nav">
        <div className="nav-left">
          <div className="nav-left-item">store</div>
          <div className="nav-left-item">clubs</div>
          <div className="nav-left-item-logo">Logo</div>
          <div className="nav-left-item">support</div>
          <div className="nav-left-item">faq</div>
        </div>
        <div className="nav-right">
          <div className="nav-right-item active-right">login</div>
          <div className="nav-right-item">create account</div>
        </div>
      </div>
    </div>
  )
}

export default Nav