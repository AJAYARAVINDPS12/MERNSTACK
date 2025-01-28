import React, { useState } from "react";

const UseState = () => {
  const initialvalue = 0; 
  const [num, setNum] = useState(initialvalue); 

  return (
    <div>
      <h1>This is useState</h1>
      <button onClick={() => setNum(num - 1)}>-</button>
      <h4>The number is {num}</h4>
      <button onClick={() => setNum(num + 1)}>+</button>
      <button onClick={() => setNum(initialvalue)}>Reset</button>
    </div>
  );
};

export default UseState;