const graph = {
  a: ["b", "c"],
  b: ["c", "d"],
  c: ["d", "e"],
  d: [],
  e: ["b"],
};

function depthFirstTraversalRecursively(graph, start, visitedNode = new Set()) {
  if (!visitedNode.has(start)) {
    visitedNode.add(start);

    for (neighbor of graph[start]) {
      depthFirstTraversalRecursively(graph, neighbor, visitedNode);
    }
  }
  return visitedNode;
}

console.log(depthFirstTraversalRecursively(graph, "a"));
