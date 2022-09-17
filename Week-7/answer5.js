// Check next greater element

let arr = [1, 3, 2, 4];
checkGreaterElement(arr);

function checkGreaterElement(arr) {
  let size = arr.length;
  for (let i = 0; i < size; i++) {
    let flag = -1;
    for (let j = i + 1; j < size; j++) {
      if (arr[j] > arr[i]) {
        flag = arr[j];
        break;
      }
    }
    console.log(arr[i] + " --> " + flag);
  }
}
