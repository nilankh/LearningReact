import React from "react";
import Person from "./Person";

function NameList2() {
  const persons = [
    {
      id: 1,
      name: "Bruce",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      age: 25,
      skill: "Angular",
    },
    {
      id: 3,
      name: "Diana",
      age: 28,
      skill: "Vue",
    },
  ]
//   const personList = persons.map((person) => (
//     // <h2>
//     //   I am {person.name}. I am {person.age} years old. I know {person.skill}
//     // </h2>

//     // alag file se kaise render krenge wo sikhe h follow file Peron.js
//     // passing Person as a Prop
    
//   ));


// peerson(toa isme koi v variable[name] ko use kr skte ho) is  parameter which is passeed as the prop to the person component
  const personList = persons.map((person) => <Person person={person}/>)

  return <div>{personList}</div>;
}
// list component is only responsible for rendering the list islia alag kia h isse aacha dikhyeg Perosn.js
export default NameList2;
