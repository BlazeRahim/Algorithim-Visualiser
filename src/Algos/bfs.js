export function bfs(grid, startNode, finishNode) {
  const visitedNodesInOrder = [];
  const queue = [startNode];
  startNode.isVisited = true;

  while (queue.length > 0) {
    const currentNode = queue.shift();
    visitedNodesInOrder.push(currentNode);

    if (currentNode === finishNode) {
      return visitedNodesInOrder;
    }

    const unvisitedNeighbors = getUnvisitedNeighbors(currentNode, grid);

    for (const neighbor of unvisitedNeighbors) {
      neighbor.isVisited = true;
      neighbor.previousNode = currentNode;
      queue.push(neighbor);
    }
  }

  return visitedNodesInOrder;
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
// Only works when called *after* the bfs method above.
export function getNodesInShortestPathOrderbfs(finishNode) {
  const nodesInShortestPathOrder = [];
  let currentNode = finishNode;
  while (currentNode !== null) {
    nodesInShortestPathOrder.unshift(currentNode);
    currentNode = currentNode.previousNode;
  }
  return nodesInShortestPathOrder;
}
