import React from 'react';
import RestBox from './RestBox';
import { Body_Info_URL } from '../utils/constants';

function Body() {

    const swiggyAPI = async () => {
        const response = await fetch(Body_Info_URL);
        const data = await response.json();
    }

  return (
    <div className='body'>

        <div className="search-box">
            <div className="search-text"></div>
            <div className="search-btn">
                <button onClick={() => console.log("btn clicked")}>
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

