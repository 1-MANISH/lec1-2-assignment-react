import React from 'react'
import "./Features.css"
import Button from './ButtonComponent/Button'

function FBox(props) {
  return (
    <div className='f-box'>
        <div className='f-box-icon' style={{backgroundColor:`${props.bgColor}`,color:`${props.color}`}}>
        {props.cIcon}
        </div>
        <h3> {props.cTitle}</h3>
        <p>{props.cDesc}</p>
        <Button btnText={"Learn more"}/>
    </div>
  )
}

export default FBox