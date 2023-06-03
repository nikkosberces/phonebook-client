import { useState } from "react";
import personService from "../services/personService";

function PersonForm({ persons, setPersons }) {
  const [newPerson, setNewPerson] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addPerson = (e) => {
    e.preventDefault(); // Fixed typo in preventDefault()

    const personObject = {
      name: newPerson,
      number: newNumber,
    };

    personService
      .createPerson(personObject)
      .then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
        setNewPerson("");
        setNewNumber("");
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={addPerson}>
      <label>Name:</label>
      <input
        type="text"
        value={newPerson}
        onChange={(e) => setNewPerson(e.target.value)}
      />{" "}
      <br />
      <label>Phone Number:</label>
      <input
        type="text"
        value={newNumber}
        onChange={(e) => setNewNumber(e.target.value)}
      />{" "}
      <br />
      <button type="submit">Add</button> {/* Fixed typo in submit */}
    </form>
  );
}

export default PersonForm;
