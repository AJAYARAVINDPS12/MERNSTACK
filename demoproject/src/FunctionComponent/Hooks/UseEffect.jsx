import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [text, setText] = useState(""); 
  useEffect(() => {
    console.log(`Current text: ${text}`);
  }, [text]); 

  return (
    <div>
      <h1>useEffect with TextArea</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type something here..."
        rows="5"
        cols="30"
      />
      <p>Current text length: {text.length}</p>
      <button onClick={() => setText("")}>Clear</button>
    </div>
  );
};

export default UseEffect;