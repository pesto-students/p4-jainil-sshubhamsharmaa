//Write a function called hasDuplicate which accepts an array
// and returns true or false if that array contains a duplicate

function hasDuplicate(arr) {
  const arrSet = new Set(arr);
  if (arrSet.size === arr.length) return false;

  return true;
}
console.log(hasDuplicate([1, 2, 3, 5]));
