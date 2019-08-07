function openOrSenior(data) {
  const result = []
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      result.push('Senior')
    } else {
      result.push('Open')
    }
  }
  return result
}

// ===

function openOrSenior(data) {
  return data.map(([age, handicap]) => (age > 54 && handicap > 7 ? 'Senior' : 'Open'))
}

console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]])) // ["Open", "Open", "Senior", "Open", "Open", "Senior"]
