const edges = [["a", "b"], ["b", "c"], ["d"], ["e"]];

function createGraph(edges) {
  let graph = {};
  for (const edge of edges) {
    const [x, y] = edge;
    if (!(x in graph)) {
      graph[x] = [];
    }
    if (y) {  // Check if y exists (for single node cases)
      if (!(y in graph)) {
        graph[y] = [];
      }
      graph[x].push(y);
      graph[y].push(x);
    }
  }
  return graph;
}

let graph = createGraph(edges);

function findingLargestIsland(graph) {
  let nodeVisited = new Set();
  let largestNode = 0;

  function dfs(node) {
    if (nodeVisited.has(node)) {
      return 0;
    }
    nodeVisited.add(node);  // Mark as visited
    let size = 1;
    for (const neighbour of graph[node]) {
      size += dfs(neighbour);
    }
    return size;
  }

  for (const node in graph) {
    if (!nodeVisited.has(node)) {
      let numberOfConnection = dfs(node);
      if (numberOfConnection > largestNode) {
        largestNode = numberOfConnection;
      }
    }
  }
  return largestNode;
}

console.log(findingLargestIsland(graph));