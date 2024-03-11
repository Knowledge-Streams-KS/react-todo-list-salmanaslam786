// import { useState } from "react";
// import Task from "./Task";
// import "./task.css";

// const Tasklist = (props) => {
//   //   const [inputNum, setInputNum] = useState(0);
//   //   const [val, setVal] = useState(0);

//   //   const handleInputChange = (event) => {
//   //     const inputValue = event.target.value;
//   //     setInputNum(inputValue);
//   //   };

//   //   const handleSubmitButton = () => {
//   //     setVal(inputNum);
//   //   };

//   const [isChecked, setIsChecked] = useState(true);

//   const handleCheckbox = () => {
//     setIsChecked(!isChecked);
//   };

//   return (
//     <>
//       {/* <input
//         onChange={handleInputChange}
//         type="text"
//         placeholder="Description"
//       />
//       <input onClick={handleSubmitButton} type="Submit" /> */}
//       <div className={isChecked ? "display" : "displaynot"}>
//         <section>{props.tD.description}</section>
//         <input
//           type="checkbox"
//           checked={!isChecked}
//           onChange={handleCheckbox}
//         ></input>
//       </div>

//       {/* <Task valueDescription={val} /> */}
//     </>
//   );
// };

// export default Tasklist;

import React from "react";

const Tasklist = () => {
  return <div>Tasklist</div>;
};

export default Tasklist;
