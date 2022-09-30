// Find if Path Exists in Graph
var v;
var graph;
function createGraph(vertices, edges) {
  graph = Array(vertices)
    .fill(0)
    .map(() => Array());
  v = vertices;
  edges.forEach((edge) => {
    let parent = edge[0];
    let child = edge[1];
    graph[child].push(parent);

    graph[parent].push(child);
  });
}

function isReachable(s, d) {
  if (s == d) return true;
  var visited = new Array(v).fill(false);
  var queue = new Array();
  visited[s] = true;
  queue.push(s);
  while (queue.length != 0) {
    s = queue.pop();
    for (var i = 0; i < graph[s].length; i++) {
      if (graph[s][i] == d) return true;
      if (!visited[graph[s][i]]) {
        visited[graph[s][i]] = true;
        queue.push(graph[s][i]);
      }
    }
  }
  return false;
}
createGraph(5, [
  [0, 1],
  [0, 2],
  [1, 2],
  [2, 0],
  [2, 3],
  [3, 3],
]);

console.log(isReachable(0, 2));
