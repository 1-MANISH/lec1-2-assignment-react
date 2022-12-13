
import React from 'react'
import "./Features.css"
import Button from './ButtonComponent/Button'
import FBox from './FBox'
import { fList } from './FeatureList'

function Features() {
  return (
    <div className='f-container'>
        <h1>Your user Search Swiss Army knife</h1>
        <Button btnText={"See All Features"}/>
        <div className='f-box-container'>
            {
                fList.map((card,index)=>{
                    return(
                        <FBox key={index} cIcon={card.cIcon} cTitle={card.cTitle} cDesc={card.cDesc} bgColor={card.bgColor}  color={card.color}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Features