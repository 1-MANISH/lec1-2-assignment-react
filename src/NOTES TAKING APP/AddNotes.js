import React, { useEffect, useRef,useState } from 'react'
import "./Notes.css"
import RefreshIcon from '@mui/icons-material/Refresh';
function AddNotes(props) {

    const noteRef = useRef(null);

    const [inputNoteLength,setInputTextlength] = useState(200);

    const [noteT,setNoteT] = useState('');


    function handleSubmit(event){

        event.preventDefault();

        const noteTextValue =noteRef.current.value;

        if(noteTextValue.trim().length > 0){
            const date = new Date();

            const note = {
                noteId:props.notes.length+1,
                noteText:noteTextValue,
                noteDate:date.toLocaleDateString(),
            }
            props.updateNotes(note);
        }
        setInputTextlength(200);
        noteRef.current.value= "";

    }

    function updateLength(event){
        setNoteT(event.target.value);
    }

    function addClass(){
        document.querySelector('.loading-icon').classList.add('animate-load-icon')
    }
    function removeClass(){
        document.querySelector('.loading-icon').classList.remove('animate-load-icon')
    }

    useEffect(()=>{
       
        const newNoteLength = 200-noteT.length
        if(newNoteLength>=0)
            setInputTextlength(newNoteLength)
     
       
    },[noteT])

    return (
        <div className='add-note-cotainer-form'>
            <form onSubmit={handleSubmit}>
                <div className='text-box'>
                    <textarea ref={noteRef} onMouseMove={addClass} onMouseLeave={removeClass}  onChange={updateLength} name="notes-add" id="notes-add" cols="20" rows="12" placeholder='Enter Your Task ....'></textarea>
                </div>
                <div className='loading'>
                    <RefreshIcon className='loading-icon '/>
                </div>
                <div className='info-box'>
                    <p>{inputNoteLength} Remening</p>
                    <button className='add-btn' onSubmit={handleSubmit}>Add</button>
                </div>
                
            </form>
        </div>
    )
}

export default AddNotes