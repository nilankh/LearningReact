import React from "react";

function FragmentDemo() {
  return (
    //   when you will inspect then you will see that there is extra div tag, so thats why we have to used fragements
    // <div>
    //   <h1>Fragment Demo</h1>
    //   <p>This decribes the Fragment Deomo Component</p>
    // </div>
    <React.Fragment>
        <h1>Fragment Demo</h1>
        <p>This Describes the Fragment Demo Component</p>
    </React.Fragment>
  );
}

export default FragmentDemo;
