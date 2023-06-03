import { useState } from "react";
import "./App.css";
import PersonForm from "./components/PersonForm";
import PersonList from "./components/PersonList";

function App() {
  const [persons, setPersons] = useState([]);

  return (
    <div>
      <h1>Phonebook</h1>
      <PersonList persons={persons} setPersons={setPersons} />
      <PersonForm persons={persons} setPersons={setPersons} />
    </div>
  );
}

export default App;
