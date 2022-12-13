import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import "./Notes.css"
function ShowNotes(props) {

    function deleteNote(id){
        const newNote = props.notes.filter((note)=>note.noteId != id)
        props.setNotes(newNote);
    }

    return (
      <div className='show-notes'>
          <div className='note-text'>
              <p>{props.noteText}</p>
          </div>
          <div className='note-info'>
              <p>{props.noteDate}</p>
                <button className='delete-btn' onClick={()=>{
                    deleteNote(props.id)
                }}>
                  <DeleteIcon />
              </button>
          </div>
      </div>
  )
}

export default ShowNotes