import { useState } from "react";

const Counter = () => {
  const [value, setValue] = useState(0);

  const handleClickIncreament = () => {
    setValue(value + 1);
  };

  const handleClickIncreamentWParam = (param) => {
    setValue(value + param);
  };
  const handleClickDecrement = () => {
    setValue(value - 1);
  };

  return (
    <div>
      <h1>Counter is changing: {value > 0 ? value : "NO Items in cart"}</h1>

      <button onClick={handleClickIncreament}> Increament</button>
      <button onClick={() => handleClickIncreamentWParam(5)}>
        Increament with param
      </button>
      <br></br>

      {value > 0 ? (
        <button onClick={handleClickDecrement}> Dncreament</button>
      ) : (
        <></>
      )}

      {value > 0 && <button onClick={handleClickDecrement}> Dicreament</button>}
    </div>
  );
};

export default Counter;
