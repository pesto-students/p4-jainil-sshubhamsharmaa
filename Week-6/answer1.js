//Max Sum Contiguous Subarray

function calculateSum(arr) {
  let max_so_far = Number.MIN_VALUE;
  let max_ending_here = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < max_ending_here + arr[i]) {
      max_ending_here += arr[i];
    } else {
      max_ending_here = arr[i];
    }
    if (max_so_far < max_ending_here) max_so_far = max_ending_here;
  }
  return max_so_far;
}

console.log(calculateSum([1, 2, 3, 4, -10]));
