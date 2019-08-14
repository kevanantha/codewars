function wave(str) {
  const result = []
  const string = str.toLowerCase().split(' ')

  for (let i = 0; i < str.length; i++) {
    console.log(string[0][i])
    if (string[0][i] === string[0][i]) {
      const a = str.replace(string[0][i], string[0][i].toUpperCase())
      result.push(a)
      continue
    }
  }
  return result
}

console.log(wave('hello'))
