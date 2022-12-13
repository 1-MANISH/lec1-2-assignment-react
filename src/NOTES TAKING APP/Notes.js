import React,{useRef,useState,useEffect} from 'react'
import "./Notes.css"
import SearchIcon from '@mui/icons-material/Search';
import AddNotes from './AddNotes';
import ShowNotes from './ShowNotes';

function Notes() {

    const inputTextValueRef = useRef(null);

    const [inputText,setInputText] = useState('');


    function updateInputTextSearch(e){
        setInputText(e.target.value)
    }

    const [notes,setNotes]  = useState([]);

    function updateNotes(note){
        const newNotes = [...notes,note];
        setNotes(newNotes)
    }

    function handleOnSubmit( event){
        event.preventDefault()
    }

    return (
        <div id='main-note-container' className='main-note-container'>
            <div className='note-header'>
                <h2>Notes</h2>
                <button className='toggle-btn' onClick={()=>{
                   document.getElementById('main-note-container').classList.toggle('toggle-mode');
                }}>Toggle Mode</button>
            </div>
            <div className='search'>
                <form onSubmit={handleOnSubmit}>
                    <SearchIcon />
                    <input onChange={updateInputTextSearch} type="text" name='note' ref={inputTextValueRef} />
                </form>
            </div>
            <div className='notes-container'>
                {
                    !inputText &&
                    notes.map((note,index)=>{
                        return(
                            <ShowNotes notes={notes} setNotes={setNotes} key={index} noteText={note.noteText} noteDate={note.noteDate} id={note.noteId}/>
                        )
                    })
                }
                {
                    inputText &&
                    notes.map((note,index)=>{

                        if(note.noteText.includes(inputText))
                        {
                            return(
                                <ShowNotes notes={notes} setNotes={setNotes} key={index} noteText={note.noteText} noteDate={note.noteDate} id={note.noteId}/>
                            )
                        }
                        
                    })
                }
               
                <AddNotes updateNotes={updateNotes} notes={notes}/>
               
            </div>
        </div>
    )
}

export default Notes