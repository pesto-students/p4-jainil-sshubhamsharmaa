//Write a function called vowelCount which accepts a string and returns a map where the keys are
//numbers and the values are the count of the vowels in the string

function vowelCount(str) {
  const vowelMap = new Map();
  for (let char of str) {
    let lowerChar = char.toLowerCase();
    if ("aeiou".includes(lowerChar)) {
      if (vowelMap.has(lowerChar)) {
        vowelMap.set(lowerChar, vowelMap.get(lowerChar) + 1);
      } else vowelMap.set(lowerChar, 1);
    }
  }
  return vowelMap;
}

console.log(vowelCount("aabbccdeee"));
