function solution(str) {
  const result = []
  let temp = ''

  for (let i = 0; i < str.length; i += 2) {
    if (str[i] && str[i + 1]) {
      temp += str[i] + str[i + 1]
    } else {
      temp += str[i] + '_'
    }
    result.push(temp)
    temp = ''
  }
  result
}

console.log(solution('abc')) // should return ['ab', 'c_']
console.log(solution('abcdef')) // should return ['ab', 'cd', 'ef']
