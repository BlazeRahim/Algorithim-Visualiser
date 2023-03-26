import React from "react";
import "./homestyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a id="refreshButton" className="navbar-brand" href="#">
                Algorithm Visualizer
              </a>
            </div>
            <ul className="nav navbar-nav">
              <li>
                <a href="#">Home</a>
              </li>
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                  Algorithms
                  <span className="caret"></span>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">Dijkstra's Algorithm</a>
                  </li>
                  <li>
                    <a href="#">A* Search</a>
                  </li>
                  <li>
                    <a href="#">Breadth-first Search</a>
                  </li>
                  <li>
                    <a href="#">Depth-first Search</a>
                  </li>
                  <li>
                    <a href="#">All pair shortest path</a>
                  </li>
                  <li>
                    <a href="#">Minimax</a>
                  </li>
                </ul>
              </li>
              <li>
                <button
                  id="actualStartButton"
                  className="btn btn-default navbar-btn"
                  type="button"
                >
                  Visualize!
                </button>
              </li>
              <li>
                <a href="https://github.com/BlazeRahim/Algorithim-Visualiser">
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <section className="banner-container">
          <div className="banner">
            <img src="Images/dijstra.png" alt="" href="public/index.html" />
            <div className="content">
              <span>DIJKSTRA</span>
            </div>
          </div>
          <div className="banner">
            <img src="Images/A search.png" alt="" />
            <div className="content">
              <span>A* SEARCH</span>
            </div>
          </div>
          <div className="banner">
            <img src="Images/DFS.png" alt="" />
            <div className="content">
              <span>DEPTH FIRST SEARCH</span>
            </div>
          </div>
          <div className="banner">
            <img src="Images/BFS.png" alt="" />
            <div className="content">
              <span>BREADTH FIRST SEARCH</span>
            </div>
          </div>
          <div className="banner">
            <img src="Images/allpairshortest.png" alt="" />
            <div className="content">
              <span>All pair shortest path</span>
            </div>
          </div>
          <div className="banner">
            <img src="Images/Minimax.jpg" alt="" />
            <div className="content">
              <span>Minimax</span>
            </div>
          </div>
        </section>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <script src="public/browser/bundle.js"></script>
      </div>
    );
  }
}

export default App;
