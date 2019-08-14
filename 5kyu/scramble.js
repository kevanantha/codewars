function scramble(str1, str2) {
  let letterHolder = {}
  for (let letter of str1) {
    if (letterHolder[letter]) letterHolder[letter]++
    else letterHolder[letter] = 1
  }
  for (let letter of str2) {
    if (!letterHolder[letter]) return false
    else letterHolder[letter]--
  }
  return true
}

console.log(scramble('rkqodlw', 'world'))
console.log(scramble('cedewaraaossoqqyt', 'codewars'))
console.log(scramble('katas', 'steak'))
console.log(scramble('scriptjava', 'javascript'))
console.log(scramble('scriptingjava', 'javascript'))
console.log(scramble('scriptsjava', 'javascripts'))
console.log(scramble('jscripts', 'javascript'))
console.log(scramble('aabbcamaomsccdd', 'commas'))
