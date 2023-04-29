import React from "react";
import AlgoVisualizer from "./AlgoVisualizer/AlgoVisualizer";
import DfsAlgoVisualizer from "./AlgoVisualizer/dfsAlgoVisualizer";
import BfsAlgoVisualizer from "./AlgoVisualizer/bfsAlgoVisualizer";
import AStarAlgoVisualizer from "./AlgoVisualizer/aStarAlgoVisualizer";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element=<AlgoVisualizer /> />
        <Route path="/dfs" element=<DfsAlgoVisualizer /> />
        <Route path="/bfs" element=<BfsAlgoVisualizer /> />
        <Route path="/astar" element=<AStarAlgoVisualizer /> />
      </Routes>
    </>
  );
}

export default App;
