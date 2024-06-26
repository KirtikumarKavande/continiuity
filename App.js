const graph = {
  a: ["b", "c"],
  b: ["c", "d"],
  c: ["d", "e"],
  d: [],
  e: ["b"],
};

// function findingDestinationNodeByDFS(graph, start, dest) {
//   const stack = [start];
//   const visitedNode = new Set();

//   while (stack.length > 0) {
//     const node = stack.pop();
//     if (node == dest) return true;
//     if (!visitedNode.has(node)) {
//       visitedNode.add(node);
//       for (const neighbor of graph[node]) {
//         stack.push(neighbor);
//       }
//     }
//   }
//   return false;
// }
// console.log(findingDestinationNodeByDFS(graph, "a", "e"));

// //by breadth first

// function findingDestinationNodeByBFS(graph, start, dest) {
//   const queue = [start];
//   const nodeVisited = new Set();

//   while (queue.length > 0) {
//     const node = queue.shift();
//     if (node == dest) {
//       return true;
//     }

//     for (const neighbor of graph[node]) {
//       if (!nodeVisited.has(neighbor)) {
//         nodeVisited.add(node)
//         queue.push(neighbor);
//       }
//     }
//   }
//   return false
// }

// console.log(findingDestinationNodeByBFS(graph,"a","e"))

function findingDestinationNodeByRecursively(
  graph,
  start,
  dest,
  visited = new Set()
) {
  if (start === dest) return true;
  if (visited.has(start)) return false;

  visited.add(start);

  for (const neighbor of graph[start]) {
    if (findingDestinationNodeByRecursively(graph, neighbor, dest, visited)) {
      return true;
    }
  }

  return false;
}

console.log(findingDestinationNodeByRecursively(graph, "a", "efff"));
