// lecture17 list renderingg
import React from "react";

function Person({person}) {
  return (
    <div>
      <h2>
        I am {person.name}. I am {person.age} years old. I know {person.skill}
      </h2>
    </div>
  );
}
// person component is only responsible for rendering html content
export default Person;
