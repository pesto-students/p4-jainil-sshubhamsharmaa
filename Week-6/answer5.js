//Pair With Given Difference

function calculateDifference(arr, diff) {
  arr.sort(function (a, b) {
    return a - b;
  });
  let i = 0;
  let j = 1;
  while (i < arr.length && j < arr.length) {
    if (i != j && arr[j] - arr[i] == diff) return 1;
    else if (arr[j] - arr[i] < diff) j++;
    else i++;
  }
  return 0;
}

let a = [5, 10, 3, 2, 50, 80];
let b = 49;
console.log(calculateDifference(a, b));
