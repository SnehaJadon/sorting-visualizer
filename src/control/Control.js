import React from "react";

function Control({
  handleNewArrayGenrate,
  setSpeed,
  isSorting,
  handleSorting,
  userInuptArray,
  setUserInuptArray,
  reSet,
  selectedSorting,
}) {
  return (
    <div className="controls-container">
      <div className="input-wrapper">
        <input
          type="text"
          value={userInuptArray}
          onChange={(e) => setUserInuptArray(e.target.value)}
          className="neumorphic-input"
          placeholder="Enter your Array between 1-500"
        />
        <div className="info-icon-wrapper">
          <i className="info-icon">i</i>
          <span className="tooltip-text">
            Provide your array by comma separated integer
          </span>
        </div>
      </div>
      <button className="neu-button" onClick={handleNewArrayGenrate}>
        Generate New Array
      </button>
      <button className="neu-button" onClick={reSet}>
        Reset
      </button>
      <select
        className="neumorphism-dropdown"
        value={selectedSorting}
        onChange={handleSorting}
      >
        <option value="" style={{color: "gray", opacity: 0.9}}>Select Sorting</option>
        <option value="bubbleSort">Bubble Sorting</option>
        <option value="mergeSort">Merge Sort</option>
        <option value="selectionSort">Selection Sort</option>
      </select>
      <label>
        Speed:
        <input
          min="10"
          type="range"
          max="200"
          className="speedControl"
          onChange={(e) => {
            console.log(200 - e.target.value);
            setSpeed(200 - e.target.value);
          }}
          disabled={isSorting}
        />
      </label>
    </div>
  );
}

export default Control;
