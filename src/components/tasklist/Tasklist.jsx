import { useState } from "react";
import Taskinner from "../task/Task";

const TaskListinner = () => {
  const [inputNum, setInputNum] = useState("");
  const [list, setList] = useState([]);
  const [val, setVal] = useState(0);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInputNum(inputValue);
  };

  const handleSubmitButton = () => {
    setVal(inputNum);
  };

  arr = val;
  console.log(arr);

  return (
    <>
      <input
        onChange={handleInputChange}
        type="text"
        placeholder="Description"
      />
      <input onClick={handleSubmitButton} type="Submit" />

      {/* <Taskinner /> */}
    </>
  );
};

export default TaskListinner;
