export function astar(grid, startNode, finishNode) {
  const visitedNodesInOrder = [];
  startNode.distance = 0;
  startNode.fScore = heuristic(startNode, finishNode);
  const openSet = [startNode];

  while (openSet.length > 0) {
    sortNodesByFScore(openSet);
    const currentNode = openSet.shift();
    visitedNodesInOrder.push(currentNode);

    if (currentNode === finishNode) {
      return visitedNodesInOrder;
    }

    currentNode.isVisited = true;

    const unvisitedNeighbors = getUnvisitedNeighbors(currentNode, grid);
    for (const neighbor of unvisitedNeighbors) {
      const tentativeGScore = currentNode.distance + 1;
      if (tentativeGScore < neighbor.distance) {
        neighbor.previousNode = currentNode;
        neighbor.distance = tentativeGScore;
        neighbor.fScore = tentativeGScore + heuristic(neighbor, finishNode);
        if (!openSet.includes(neighbor)) {
          openSet.push(neighbor);
        }
      }
    }
  }

  return visitedNodesInOrder;
}

function heuristic(nodeA, nodeB) {
  const dx = Math.abs(nodeA.col - nodeB.col);
  const dy = Math.abs(nodeA.row - nodeB.row);
  return dx + dy;
}

function sortNodesByFScore(nodes) {
  nodes.sort((nodeA, nodeB) => nodeA.fScore - nodeB.fScore);
}

function getUnvisitedNeighbors(node, grid) {
  const neighbors = [];
  const { col, row } = node;
  if (row > 0) neighbors.push(grid[row - 1][col]);
  if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
  if (col > 0) neighbors.push(grid[row][col - 1]);
  if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
  return neighbors.filter(
    (neighbor) => !neighbor.isVisited && !neighbor.isWall
  );
}

// Backtracks from the finishNode to find the shortest path.
// Only works when called *after* the astar method above.
export function getNodesInShortestPathOrderAstar(finishNode) {
  const nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  return nodesInShortestPathOrder;
}
