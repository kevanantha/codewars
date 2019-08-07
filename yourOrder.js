function order(words) {
  if (!words) return ''

  const array = []
  words = words.split(' ')
  let j = 1
  for (let i = 0; i < words.length; i++) {
    if (words[i].indexOf(j) > -1) {
      array.push(words[i])
      j++
      i = -1
    }
  }
  return array.join(' ')
}

// ===

function order(words) {
  return words
    .split(' ')
    .sort(function(a, b) {
      return a.match(/\d/) - b.match(/\d/)
    })
    .join(' ')
}

console.log(order('is2 Thi1s T4est 3a')) // "Thi1s is2 3a T4est"
console.log(order('4of Fo1r pe6ople g3ood th5e the2')) // "Fo1r the2 g3ood 4of th5e pe6ople"
