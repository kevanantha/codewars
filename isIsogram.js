/*
* An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
*/

function isIsogram(str) {
  str = str
    .toLowerCase()
    .split('')
    .sort()
    .join('')
  let firstLetter = str[0]
  let result = []

  for (let i = 0; i < str.length; i++) {
    if (str[i] === firstLetter) {
      result.push(str[i])
    } else if (result.length < 2) {
      result = []
      firstLetter = str[i]
      result.push(str[i])
    }
  }

  if (result.length > 1) {
    return false
  } else {
    return true
  }
}

// ====

function isIsogram(str) {
  return !/(\w).*\1/i.test(str)
}

console.log(isIsogram('Dermatoglyphics')) // true
console.log(isIsogram('aba')) // false
console.log(isIsogram('moOse')) // false // -- ignore letter case
