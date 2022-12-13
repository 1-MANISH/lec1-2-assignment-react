import React from 'react'
import "./Accordian.css"
import AddIcon from '@mui/icons-material/Add';

function AccBox(props) {
    function addResponsiveClass(i){
        const arr = document.getElementsByClassName('desc');
        arr[i].classList.toggle('add-resp')
        
    }
  return (
    <div  className='acc-box'>
            <div className='title'>
                {props.title}
                <button className='btn' onClick={()=>{
                    addResponsiveClass(props.index)
                }}><AddIcon className='add-icon' /></button>
            </div>
            <div  className='description desc'>
                {props.description}
            </div>

    </div>
  )
}

export default AccBox