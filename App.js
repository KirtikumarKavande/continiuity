const graph = {
  a: ["b", "c"],
  b: ["c", "d"],
  c: ["d", "e"],
  d: [],
  e: ["b"],
};

function breadthFirstSearch(graph, start) {
  const queue = [start];
  const nodeVisited = new Set([start]);  
  while (queue.length > 0) {
    const node = queue.shift();
    for (const neighbor of graph[node]) {
      if (!nodeVisited.has(neighbor)) {
        nodeVisited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
  return nodeVisited;
}
console.log(breadthFirstSearch(graph, "a"));
