import { useState } from "react";
import "./App.css";
import Form from "./Form/Form";
function App() {
  const [newNote, setnewNote] = useState({});
  const [notesList, setnotesList] = useState([]);

  console.log(newNote)
  
  return (
    <div>
      <form
        newNoteSetter={setnewNote}
        setnotesList={setnotesList}
        newNote={newNote}
      />
    </div>
  );
}

export default App;
