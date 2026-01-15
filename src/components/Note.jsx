import React from "react";

function Note(props){
    return(
        <div className="note">
            <h1 contentEditable='true'>{props.note.title}</h1>
            <p contentEditable='true'>{props.note.content}</p>
        </div>        
    )
}

export default Note;