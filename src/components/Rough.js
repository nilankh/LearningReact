import React from "react";

function Rough() {
  const names = ["Ajay kumar", "Mala Sinha", "Nilank Nikhil"];

  // 3rdway
  const nameList = names.map((name, index) => <h2>{name}</h2>);
  return (
    <div>
      {/* 1st way */}
      {/* <h2>{names[0]}</h2>
      <h2>{names[1]}</h2>
      <h2>{names[2]}</h2> */}

      {/* 2nd way */}
      {/* {
        names.map(names => <h2>{names}</h2>)
      } */}

      {/* 3rd way */}
      {nameList}
    </div>
  );
}

export default Rough;
