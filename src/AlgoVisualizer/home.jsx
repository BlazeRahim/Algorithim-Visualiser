import React from "react";
import "./al.css";

class AlgorithmVisualizer extends React.Component {
  render() {
    return (
      <div id="navbarDiv">
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a id="refreshButton" className="navbar-brand" href="#">
                Algorithm Visualizer
              </a>
            </div>
            <ul className="nav navbar-nav">
              <li id="startButtonAddObject">
                <a href="#">Home</a>
              </li>
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                  Algorithms
                  <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li id="startButtonDijkstra">
                    <a href="#">Dijkstra's Algorithm</a>
                  </li>
                  <li id="startButtonAStar2">
                    <a href="#">A* Search</a>
                  </li>
                  <li id="startButtonBFS">
                    <a href="#">Breadth-first Search</a>
                  </li>
                  <li id="startButtonDFS">
                    <a href="#">Depth-first Search</a>
                  </li>
                </ul>
              </li>
              <li id="startButtonStart">
                <button
                  id="actualStartButton"
                  className="btn btn-default navbar-btn"
                  type="button"
                >
                  Visualize!
                </button>
              </li>
              <li id="startButtonAddObject">
                <a href="https://github.com/BlazeRahim/Algorithim-Visualiser">
                  <i className="fab fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <section className="banner-container">
          <div className="banner">
            <img src="" alt="" />
            <div className="content">
              <span>DIJKSTRA</span>
            </div>
          </div>
          <div className="banner">
            <img src="" alt="" />
            <div className="content">
              <span>A* SEARCH</span>
            </div>
          </div>
          <div className="banner">
            <img src="DFS.jpg" alt="" />
            <div className="content">
              <span>DEPTH FIRST SEARCH</span>
            </div>
          </div>
          <div className="banner">
            <img src="BFS.jpg" alt="" height />
            <div className="content">
              <span>BREADTH FIRST SEARCH</span>
            </div>
          </div>
          <div className="banner">
            <img src="" alt="" height />
            <div className="content">
              <span>unknown Algorithm</span>
            </div>
          </div>
          <div className="banner">
            <img src="" alt="" height />
            <div className="content">
              <span>Unknown algorithm 2</span>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default AlgorithmVisualizer;
