const edges = [["a", "b"], ["b", "c"], ["d"], ["e"]];
// Expected output: 3

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

function findingLargestIsland(graph) {
  let nodeVisited = new Set();
  let count = 0;
  let largestIsland=0

  function DFS(node,currentCount) {
    for (const iterator of graph[node]) {
      if (!nodeVisited.has(iterator)) {
        nodeVisited.add(iterator);
        currentCount++ 
        DFS(iterator,currentCount);
      }
    }
    console.log(currentCount)
    if(currentCount>largestIsland){
      largestIsland=currentCount
    }
  }
  for (const node in graph) {
    let currentCount=1
    if (!nodeVisited.has(node)) {
      nodeVisited.add(node);
      DFS(node,currentCount);
      count++;
    }
  }
  return largestIsland;
}
console.log(findingLargestIsland(graph));
