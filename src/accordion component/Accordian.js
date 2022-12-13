import React from 'react'
import "./Accordian.css"
import AccBox from './AccBox';
import {accData} from "./AccData"

function Accordian() {
  return (
    <div className='accrordian-container'>
        {
            accData.map((data,index)=>{
                return(
                    <AccBox key={index} title={data.title} description={data.description} index={index}/>
                )
            })
        }
    </div>
  )
}

export default Accordian