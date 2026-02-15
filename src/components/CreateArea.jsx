import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

export default function CreateArea(props) {
  const [isExpande, setIsExpande] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    if ((note.title !== "") & (note.content !== "")) {
      props.onAdd(note);
      setNote({
        title: "",
        content: "",
      });
    } else {
      alert("Titulo ou conteudo vazio!");
    }

    event.preventDefault();
  }

  function expande() {
    setIsExpande(true);
  }

  return (
    <div>
      <form className="create-note">
        <input
          name="title"
          placeholder="Titulo"
          value={note.title}
          onChange={handleChange}
          onClick={expande}
        />
        {isExpande ? (
          <Zoom in={isExpande}>
            <textarea
              name="content"
              placeholder="Descrição do card"
              rows={isExpande ? 3 : 1}
              value={note.content}
              onChange={handleChange}
            />
          </Zoom>
        ) : null}

        <Zoom in={isExpande}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
