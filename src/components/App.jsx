import React from "react";
import Header from './Header'
import Footer from "./Footer";
import Note from "./Note";

import notes from '../notes'



function App(){
    return (
        <>
            <Header />

            {notes.map((note) =>{
                return <Note key={note.id} note={note} />
            })}
            
            <Footer />
        </>
    )
}

export default App;