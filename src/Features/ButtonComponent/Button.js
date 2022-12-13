import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./Button.css"
function Button(props) {
  return (
    <div className='btn-bx'>
        <button className='btn-main' >
            {props.btnText}
            <ArrowForwardIcon />
        </button>
    </div>
  )
}

export default Button