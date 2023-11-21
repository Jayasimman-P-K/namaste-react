import React from 'react'
import { IMG_URL } from '../utils/constants'

function RestBox() {
  return (
    <div>
        <div className="rest-box">
            <div className="box-food-img">
                <img src={IMG_URL}/>
            </div>
            <div className="box-rest-text">
                <h3>rest name</h3>
                <h2>Briyani</h2>
                <h4>ratings</h4>
                <h4>price</h4>
            </div>
                
        </div>
    </div>
  )
}

export default RestBox