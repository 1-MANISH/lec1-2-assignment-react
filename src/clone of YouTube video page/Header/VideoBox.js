import React from 'react'
import "./Videos.css"

function VideoBox(props) {
  return (
    <div className='v-box'>
        <img src={props.vImage} alt={props.vTitle} />
        <h3>{props.vTitle}</h3>
        <p>{props.vDesc}</p>
        <div className='v-bottom'>
            {props.vDate} | {props.vViews}
        </div>
    </div>
  )
}

export default VideoBox