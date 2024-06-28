const edges = [
  ["b", "a"],
  ["c", "a"],
  ["b", "c"],
  ["r","s"]
];
function createGraph(edges) {
  let graph = {};
  for (const edge of edges) {
    const [x, y] = edge;
    if (!(x in graph)) {
      graph[x] = [];
    }
    if (!(y in graph)) {
      graph[y] = [];
    }

    graph[x].push(y);
    graph[y].push(x);
  }
  return graph;
}
const graph = createGraph(edges);

function findingNumberOfIsland(graph) {
  let nodeVisited = new Set();
  let count = 0;

  function DFS(node) {
    for (const iterator of graph[node]) {
      if (!nodeVisited.has(iterator)) {
        nodeVisited.add(iterator);
        DFS(iterator);
      }
    }
  }
  for (const node in graph) {
    if (!nodeVisited.has(node)) {
      nodeVisited.add(node);
      DFS(node);
      count++;
    }
  }
  return count;
}
console.log(findingNumberOfIsland(graph));
