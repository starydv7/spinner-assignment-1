import React, { useState } from "react";
import "./spinner.css";
import WheelComponent from "react-wheel-of-prizes";
const SpinnerWheel = () => {
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const tailOptions = ["ab", "bc", "cd", "de", "ef"];

  const handleInputChange = (e) => {
    setInputValue(e.target.value.toLowerCase());
  };
  const segments = [
    "better luck next time",
    "ab",
    "ba",
    "ca",
    "da",
    "ac",
    "ca",
    "bd",
    "cd",
    "dc",
    "ad",
    "a",
    "b",
    "c",
    "d",
    "abcd",
    "bacd",
    "cabd",
  ];
  const segColors = [
    "#EE4040",
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    "#F9AA1F",
    "#EC3F3F",
    "#FF9000",
  ];
  const onFinished = (winner) => {
    console.log(winner);
  };

  const handleSpin = () => {
    // Validate input
    if (inputValue.length !== 1 || !alphabet.includes(inputValue)) {
      return;
    }

    const randomTail =
      tailOptions[Math.floor(Math.random() * tailOptions.length)];

    const newResult =randomTail;
   console.log("new",newResult);
   console.log("input",)
    if (newResult === inputValue) {
      setResult("Got it!");
    } else {
      setResult([...history,"Try More Game"]);
    }
    
    setHistory([...history, newResult]);

    setInputValue("");
  };

  return (
    <div className="spinner-container">
      <input
        type="text"
        maxLength="2"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter alphabet"
      />
      <button onClick={handleSpin}>add</button>
      <WheelComponent
      segments={segments}
      segColors={segColors}
      winningSegment='won 10'
      onFinished={(winner) => onFinished(winner)}
      primaryColor='black'
      contrastColor='white'
      buttonText='Spin'
      isOnlyOnce={false}
      size={290}
      upDuration={100}
      downDuration={1000}
      fontFamily='Arial'
    />
      {result && <div className="result">{result}</div>}
      <div className="history">
        <h2>Spin History</h2>
        <ul>
          {history.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SpinnerWheel;
