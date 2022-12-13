import React from 'react'
import "./Videos.css"
import { vList } from './VideosList'
import VideoBox from './VideoBox'

function Videos() {
  return (
    <div className='v-container'>
        {
            vList.map((video,index)=>{
                return (
                    <VideoBox key={index} vImage={video.vImage} vTitle={video.vTitle} vDesc={video.vDesc} vDate={video.vDate} vViews={video.vViews}/>
                )
            })
        }
    </div>
  )
}

export default Videos