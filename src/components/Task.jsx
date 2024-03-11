import { useState } from "react";

const Task = (props) => {
  return (
    <>
      {props.valueDescription == 0 ? (
        "No Data Found"
      ) : (
        <>
          <p> {props.valueDescription} </p>
          <input type="checkbox" />
        </>
      )}
    </>
  );
};

export default Task;
