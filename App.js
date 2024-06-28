const edges = [
  ["b", "a"],
  ["c", "a"],
  ["b", "c"],
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

function DFSForGraph(graph, start, dest, visitedNode = new Set()) {
  const stack = [start];
  while (stack.length !== 0) {
    const node = stack.pop();
    if (visitedNode.has(node)) return false;

    visitedNode.add(node);
    if (node === dest) return true;
    for (const ele of graph[node]) {
      stack.push(ele);
    }
  }
  return false;
}

console.log(DFSForGraph(graph, "a", "c"));
