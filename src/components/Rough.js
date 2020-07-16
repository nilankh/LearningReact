import React from "react";
import Person from "./Person";
function Rough() {
  const persons = [
    {
      id: 1,
      name: "Ajay Kumar",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Mala Sinha",
      age: 25,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Nilank Nikhil",
      age: 28,
      skill: "Vue",
    },
  ];
  // const personList = persons.map(personss => <h2>I am {personss.name}. I am {personss.age} years old. I know {personss.skill}</h2>)
  const personList = persons.map((person) => <Person key={person.id} person={person} />);
  return <div>{personList}</div>;
}

export default Rough;
