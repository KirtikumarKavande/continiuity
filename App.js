const graph = {
  a: ["b", "c"],
  b: ["c", "d"],
  c: ["d", "e"],
  d: [],
  e: ["b"],
};

function deathTraversalGraph(graph, startNode) {
  let stack = [startNode];
  let nodeVisited = new Set();
  let result=[]

  while (stack.length !== 0) {
    let node = stack.pop(); 
    if (!nodeVisited.has(node)) {
      nodeVisited.add(node); 
      result.push(nodeVisited)
      for (neighbor of graph[node]) {
        if (!nodeVisited.has(neighbor)) {
          stack.push(neighbor);
        }
      }
    }
  }
  return nodeVisited
}
console.log(deathTraversalGraph(graph,'a')
)