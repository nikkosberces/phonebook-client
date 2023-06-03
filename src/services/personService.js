const baseUrl = "http://localhost:8080/api/persons";

function getPersons() {
  return fetch(baseUrl)
    .then((res) => res.json())
    .then((data) => data);
}

function createPerson(person) {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(person),
  })
    .then((res) => res.json())
    .then((data) => data);
}

export default { getPersons, createPerson };
