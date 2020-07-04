import React from "react";

function NameList() {
  const names = ["Brue", "Clark", "Diana"];
  
//   3rd way of list rendering
  const nameList = names.map((name) => <h2>{name}</h2>);
  return (
    <div>
      {/* 1st way to render  */}
      {/* <h2>{names[0]}</h2> 
           <h2>{names[1]}</h2> 
           <h2>{names[2]}</h2>  */}

      {/* 2nd way to render via map method */}

      {/* {
               names.map(name => <h2>{name}</h2>)
           } */}

      {/* 3rd way */}

      {nameList}

    </div>
  );
}

export default NameList;
