//Sort array of 0's,1's and 2's

function sortArray(arr) {
  let count0 = 0;
  let count1 = 0;
  let count2 = 0;

  for (let i of arr) {
    if (i == 0) count0++;
    if (i == 1) count1++;
    if (i == 2) count2++;
  }

  let i = 0;
  while (count0 > 0) {
    arr[i++] = 0;
    count0--;
  }
  while (count1 > 0) {
    arr[i++] = 1;
    count1--;
  }
  while (count2 > 0) {
    arr[i++] = 2;
    count2--;
  }

  console.log(arr);
}
let arr = [0, 1, 2, 0, 1];
sortArray(arr);
