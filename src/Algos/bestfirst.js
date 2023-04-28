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
