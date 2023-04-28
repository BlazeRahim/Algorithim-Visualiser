import React from "react";
import AlgoVisualizer from "./AlgoVisualizer/AlgoVisualizer";
import DfsAlgoVisualizer from "./AlgoVisualizer/dfsAlgoVisualizer";
import bfsAlgoVisualizer from "./AlgoVisualizer/bfsAlgoVisualizer";
import aStarAlgoVisualizer from "./AlgoVisualizer/aStarAlgoVisualizer";
// import bestfirstAlgoVisualizer from "./AlgoVisualizer/bestfirstAlgoVisualizer";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element=<AlgoVisualizer /> />
        <Route path="/dfs" element=<DfsAlgoVisualizer /> />
        <Route path="/bfs" element=<bfsAlgoVisualizer /> />
        <Route path="/astar" element=<aStarAlgoVisualizer /> />
      </Routes>
    </>
  );
}

export default App;
