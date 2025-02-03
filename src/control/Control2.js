import React from "react";
import { RiRestartLine } from "react-icons/ri";

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
  const handleArrayGenerate = () => {
    handleNewArrayGenrate()
  };

  const handleAlgorithm = (algo) => {
    handleSorting(algo)
  };

  const handleSpeed = (speed) => {
    setSpeed(speed)
  };

  const handleArrayInput = (value) =>{
    setUserInuptArray(value)
  }

    const handleReset = () => {
        reSet()
    };

//   const handlePlay = () => {};


  return (
    <div
        
      className=""
      style={{
        pointerEvents: `${isSorting ? "none" : ""}`,
        background: "#2e1065",
        display: "flex",
        position: "fixed",
        bottom: "0.5rem",
        left: "50%",
        padding: "0.75rem",
        transform: "translate(-50%,10px) scale(0.9)",
        gap: "1rem",
        alignItems: "center",
        borderRadius: "1.5rem",
        height: "9rem",
        color: "#ffffff",
        "--transform-scale-x": ".75",
        "--transform-scale-y": ".75",
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      }}
    >
      <div
        className="bg-indigo-900 p-5 rounded-3xl"
        style={{
          padding: "1rem",
          borderRadius: "1.5rem",
          backgroundColor: "#312E81",
        }}
      >
        <div>
          <p
            className="flex items-center gap-2 text-xl font-bold"
            style={{
              margin: "0",
              display: "flex",
              gap: "0.5rem",
              alignItems: "center",
              fontSize: "1.25rem",
              lineHeight: "1.75rem",
              fontWeight: 700,
            }}
          >
            Array input
          </p>
        </div>
        <div className="flex gap-3" style={{ display: "flex", gap: "0.75rem" }}>
          <input value={userInuptArray} onChange={e => handleArrayInput(e.target.value)} placeholder="12,43,35,23,8,3,..." className="arr-inp" type="text" />
        </div>
      </div>
      <div
        className="bg-indigo-900 p-5 rounded-3xl"
        style={{
          padding: "1rem",
          borderRadius: "1.5rem",
          backgroundColor: "#312E81",
        }}
      >
        <p
          className="flex items-center gap-2 text-xl font-bold"
          style={{
            margin: "0",
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
            fontSize: "1.25rem",
            lineHeight: "1.75rem",
            fontWeight: 700,
          }}
        >
            Array
        </p>
        <button
          onClick={() => handleArrayGenerate()}
          className="bg-indigo-950 my-2 text-lg p-2 rounded-lg font-semibold"
          style={{
            background: "#1e1b4b",
            color: "white",
            border: "none",
            padding: "0.5rem",
            marginTop: "0.5rem",
            marginBottom: "0.5rem",
            borderRadius: "0.5rem",
            fontSize: "1.125rem",
            lineHeight: "1.75rem",
            fontWeight: 600,
          }}
        >
          Generate
        </button>
      </div>
      <div
        className="bg-indigo-900 p-5 rounded-3xl"
        style={{
          padding: "1rem",
          borderRadius: "1.5rem",
          backgroundColor: "#312E81",
        }}
      >
        <p
          className="text-xl font-bold"
          style={{
            fontSize: "1.25rem",
            lineHeight: "1.75rem",
            margin: "0",
            fontWeight: 700,
          }}
        >
          Algorithm
        </p>
        <select
          className="bg-indigo-950 my-2 text-lg p-2 rounded-lg px-4 font-semibold"
          style={{
              background: "#1e1b4b",
              color: "white",
              border: "none",
              padding: "0.5rem",
              paddingLeft: "1rem",
              paddingRight: "1rem",
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
              borderRadius: "0.5rem",
              fontSize: "1.125rem",
              lineHeight: "1.75rem",
              fontWeight: 600,
            }}
            onChange={(e) => handleAlgorithm(e.target.value)}
            value={selectedSorting}
        >
          <option value="">Select Sorting</option>
          <option value="bubbleSort">Bubble Sorting</option>
          <option value="mergeSort">Merge Sort</option>
          <option value="selectionSort">SelectionSort Sort</option>
        </select>
      </div>
      <div
        className="bg-indigo-900 p-5 rounded-3xl"
        style={{
          padding: "1rem",
          borderRadius: "1.5rem",
          backgroundColor: "#312E81",
        }}
      >
        <p
          className="flex items-center gap-2 text-xl font-bold"
          style={{
            display: "flex",
            gap: "0.5rem",
            alignItems: "center",
            fontSize: "1.25rem",
            lineHeight: "1.75rem",
            margin: "0",
            fontWeight: 700,
          }}
        >
          Speed
        </p>
        <select
          onInput={(e) => handleSpeed(e.target.value)}
          className="bg-indigo-950 my-2 text-lg p-2 rounded-lg font-semibold"
          style={{
            background: "#1e1b4b",
            color: "white",
            border: "none",
            padding: "0.5rem",
            marginTop: "0.5rem",
            marginBottom: "0.5rem",
            borderRadius: "0.5rem",
            fontSize: "1.125rem",
            lineHeight: "1.75rem",
            fontWeight: 600,
          }}
          defaultValue={100}
        >
          <option value="190">Slow</option>
          <option value="100">Medium</option>
          <option value="50">Fast</option>
        </select>
      </div>
      {/* <FaPlay onClick={handlePlay} className="igh4" /> */}
      <RiRestartLine onClick={handleReset} className="igh5" />
    </div>
  );
}

export default Control;
