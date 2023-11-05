import React from 'react';
import RestBox from './RestBox';

function Body() {
  return (
    <div className='body'>

        <div className="search-box">
            <div className="search-text"></div>
            <div className="search-btn">
                <button>
                    Search
                </button>
            </div>
        </div>

        <div className="rest-container">
            <RestBox />
            <RestBox />
            <RestBox />
            <RestBox />
            <RestBox />
            <RestBox />
            <RestBox />
        </div>
    </div>
  )
}

export default Body;