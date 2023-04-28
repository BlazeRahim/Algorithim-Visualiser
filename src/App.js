import React from "react";
// import AlgoVisualizer from "./AlgoVisualizer/AlgoVisualizer";
import DfsAlgoVisualizer from "./AlgoVisualizer/dfsAlgoVisualizer";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import AlgoVisualizer from "./AlgoVisualizer/AlgoVisualizer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element=<AlgoVisualizer /> />
        <Route path="/dfs" element=<DfsAlgoVisualizer /> />
        {/* <AlgoVisualizer></AlgoVisualizer> */}
      </Routes>
    </>
  );
}

export default App;
