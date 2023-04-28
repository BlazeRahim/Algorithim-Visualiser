function greedyBestFirstSearch(grid, startNode, finishNode) {
  const visitedNodesInOrder = [];
  startNode.distance = 0;
  const unvisitedNodes = [startNode];

  while (!!unvisitedNodes.length) {
    sortNodesByHeuristic(unvisitedNodes, finishNode);
    const closestNode = unvisitedNodes.shift();

    if (closestNode.isWall) continue;
    if (closestNode.distance === Infinity) return visitedNodesInOrder;

    closestNode.isVisited = true;
    visitedNodesInOrder.push(closestNode);

    if (closestNode === finishNode) return visitedNodesInOrder;

    updateUnvisitedNeighborsGBFS(closestNode, grid, finishNode, unvisitedNodes);
  }
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
function sortNodesByHeuristic(unvisitedNodes, finishNode) {
  unvisitedNodes.sort(
    (nodeA, nodeB) =>
      nodeA.heuristicDistance(finishNode) - nodeB.heuristicDistance(finishNode)
  );
}

function updateUnvisitedNeighborsGBFS(node, grid, finishNode, unvisitedNodes) {
  const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
  for (const neighbor of unvisitedNeighbors) {
    neighbor.distance = node.distance + 1;
    neighbor.previousNode = node;
    unvisitedNodes.push(neighbor);
  }
}

Node.prototype.heuristicDistance = function (finishNode) {
  return (
    Math.abs(this.row - finishNode.row) + Math.abs(this.col - finishNode.col)
  );
};
