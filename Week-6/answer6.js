//3 sum

function calculate3sum(arr, required_sum) {
  let size = arr.length;
  let l, r;
  arr.sort((a, b) => a - b);
  var min_diff = Number.MAX_VALUE;
  for (let i = 0; i < size - 2; i++) {
    l = i + 1;
    r = size - 1;
    while (l < r) {
      var current_sum = arr[i] + arr[l] + arr[r];
      if (current_sum == required_sum) {
        return current_sum;
      } else if (current_sum < required_sum) {
        let diff = required_sum - current_sum;
        l++;
        if (diff < min_diff) min_diff = diff;
      } else if (current_sum > required_sum) {
        let diff = current_sum - required_sum;
        r--;
        if (diff < min_diff) min_diff = diff;
      }
    }

    return min_diff;
  }
}

console.log(calculate3sum([1, 4, 45, 6, 10, 8], 20));
