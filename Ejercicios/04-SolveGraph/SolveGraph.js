/* function SolveGraph(graph, start, end, visited = {}) {
  // Your code here:
  // start -> s
  // end -> r
  if (visited[start]) return false;
  visited[start] = true;
  const vertex = graph[start];
  console.log(vertex);
  for (const elem of vertex) {
    if (elem === end) return true;
    if (SolveGraph(graph, elem, end, visited) === true) return true;
  }
  return false;
} */

// Segunda solucion
function SolveGraph(graph, start, end) {
  const visited = new Set();

  function dfs(vertex) {
    visited.add(vertex);

    if (vertex === end) {
      return true;
    }

    for (const neighbor of graph[vertex]) {
      if (!visited.has(neighbor)) {
        if (dfs(neighbor)) {
          return true;
        }
      }
    }

    return false;
  }

  return dfs(start);
}

const graph = {
  a: ["c"],
  b: ["c"],
  c: ["s", "r"],
  d: ["a"],
  s: ["a", "c"],
  r: ["d"],
  z: ["z"],
};
 console.log(SolveGraph(graph, "a", "r")); 

module.exports = SolveGraph;