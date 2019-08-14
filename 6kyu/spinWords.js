function spinWords(str) {
  str = str.split(' ')
  const result = []

  for (let i = 0; i < str.length; i++) {
    if (str[i].length >= 5) {
      result.push(
        str[i]
          .split('')
          .reverse()
          .join('')
      )
    } else {
      result.push(str[i])
    }
  }
  return result.join(' ')
}

console.log(spinWords('Hey fellow warriors'))
console.log(spinWords('This is another test'))
