function validParentheses(parens) {
  const stack = []
  const map = {
    '(': ')'
  }

  for (let i = 0; i < parens.length; i++) {
    if (parens[i] === '(') {
      stack.push(parens[i])
    } else {
      const last = stack.pop()
      if (parens[i] !== map[last]) return false
    }
  }
  if (stack.length !== 0) return false
  return true
}

console.log(validParentheses('))(('))
console.log(validParentheses('()'))
console.log(validParentheses(')(()))'))
console.log(validParentheses('('))
console.log(validParentheses('(())((()())())'))
