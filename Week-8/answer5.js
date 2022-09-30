// Find the town judge

var n = 3;
var trust = [
  [1, 3],
  [2, 3],
  [3, 1],
];

console.log(findJudge(n, trust));

function findJudge(n, trust) {
  var netTrustGains = Array(n + 1).fill(0);

  trust.forEach((t) => {
    let a = t[0];
    let b = t[1];
    netTrustGains[a]--;
    netTrustGains[b]++;
  });

  var judge = -1;
  for (let i = 0; i <= n; i++) {
    if (netTrustGains[i] == n - 1) {
      judge = i;
    }
  }
  return judge;
}
