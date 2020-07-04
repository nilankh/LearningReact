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
//   const personList = persons.map((person) => <Person person={person}/>)
//   isko bina key ke krenge toa warning aayega toa Each child in a list should have a unique "key" prop toa islia neeche wale me hm key pass krenge fir wo warning chala jyga (upar likha hua line v sahi h bs neeche usi ko key ke saath likh rhe h)
  const personList = persons.map((person) => <Person key={person.id} person={person}/>)//jaruri ni h id sirf id hi ho uske jagah kuch v ho skta h it could be anything but it should be unique within the list

// Key prop is a special attribute you need to include when creating list of elements, Keys props are not accessible in child component

  return <div>{personList}</div>;
}
// list component is only responsible for rendering the list islia alag kia h isse aacha dikhyeg Perosn.js
export default NameList2;
