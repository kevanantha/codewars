function sortString(string, ordering) {
  const splitStr = string.split('')
  const result = splitStr.sort((a, b) => {
    return a - b
  })
  return result
}

console.log(sortString('foos', 'of')) //=> "oofs"
console.log(sortString('string', 'gnirts')) // => "gnirts"
console.log(sortString('banana', 'abn')) //    => "aaabnn"
