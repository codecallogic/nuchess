import React, {useState, useEffect} from 'react';

const Search = ({}) => {

  const search = (e) => {
    e.preventDefault()
  }
  
  return (
    <div className="search-container">
      <div className="search">
        <form className="search-form" onSubmit={search}>
          <button className="search-form-icon">
            <svg className="search-form-icon-button">
              <use xlinkHref="/sprite.svg#icon-search"></use>
            </svg>
          </button>
          <input type="text" className="search-form-input" placeholder="Search for players and clubs"/>
          <button className="search-form-button">
            search
          </button>
        </form>
      </div>
    </div>
  )
}

export default Search
