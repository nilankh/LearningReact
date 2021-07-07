// lecture25 Fragments
import React from "react";

function Columns() {
  const items = [];
  return (
    // ReactFragment can also be reprsented as <></>
    // If you use <> </> instead of <React.Fragment></React.Fragment> then there is one limitation you can't pass key attribute.
    <>
      {/* {items.map((item) => (
        <React.Fragment key={item.id}>
          <h1>Title</h1>
          <p>{item.title}</p>
        </React.Fragment>
      ))} */}

      <td>Name</td>
      <td>Nilank</td>
    </>
  )
}

export default Columns;
