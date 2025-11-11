import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleEqual = () => {
    try {
      // Evaluate the input string
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={input} readOnly className="display" />
      <div className="buttons">
        {["7", "8", "9", "/",
          "4", "5", "6", "*",
          "1", "2", "3", "-",
          "0", ".", "=", "+"].map((btn) => (
          <button
            key={btn}
            onClick={() => {
              if (btn === "=") handleEqual();
              else handleClick(btn);
            }}
          >
            {btn}
          </button>
        ))}
        <button onClick={handleClear} className="clear">C</button>
      </div>
    </div>
  );
};

export default App;
