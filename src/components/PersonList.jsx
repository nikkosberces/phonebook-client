import { useEffect } from "react";
import personService from "../services/personService";

function PersonList({ persons, setPersons }) {
  useEffect(() => {
    personService
      .getPersons()
      .then((response) => {
        setPersons(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <ul>
      {persons.map((person) => (
        <li key={person.id}>{person.name}</li>
      ))}
    </ul>
  );
}

export default PersonList;
