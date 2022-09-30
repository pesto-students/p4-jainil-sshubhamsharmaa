// All Path from source to target

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
    graph[parent].push(child);
  });
}

function printAllPaths(s, d) {
  let isVisited = new Array(v);
  for (let i = 0; i < v; i++) isVisited[i] = false;
  let pathList = [];
  pathList.push(s);
  printAllPathsUtil(s, d, isVisited, pathList);
}
function printAllPathsUtil(u, d, isVisited, localPathList) {
  if (u == d) {
    console.log(localPathList + " ");
    //   document.write(localPathList + "<br>");
    return;
  }
  isVisited[u] = true;

  for (let i = 0; i < graph[u].length; i++) {
    if (!isVisited[graph[u][i]]) {
      localPathList.push(graph[u][i]);
      printAllPathsUtil(graph[u][i], d, isVisited, localPathList);
      localPathList.splice(localPathList.indexOf(graph[u][i]), 1);
    }
  }
  isVisited[u] = false;
}

createGraph(4, [
  [0, 1],
  [0, 2],
  [0, 3],
  [2, 0],
  [2, 1],
  [1, 3],
]);

let s = 2;
let d = 3;

printAllPaths(s, d);
