// Your task is to make function, which returns the sum of a sequence of integers.
// The sequence is defined by 3 non-negative values: begin, end, step.
// If begin value is greater than the end, function should returns 0

/* const sequenceSum = (begin, end, step) => {
  if (begin > end) return 0

  let total = 0

  for (i = begin; i <= end; i += step) {
    total += i
  }

  return total
} */

// ===

const sequenceSum = (begin, end, step) => {
  if (begin > end) return 0
  return begin + sequenceSum(begin + step, end, step)
}

console.log(sequenceSum(2, 2, 2)) // 2
console.log(sequenceSum(2, 6, 2)) // 12 // 2 + 4 + 6
console.log(sequenceSum(3, 9, 3)) // 12 // 2 + 4 + 6
console.log(sequenceSum(1, 5, 1)) // 15 // 1 + 2 + 3 + 4 + 5
console.log(sequenceSum(1, 5, 3)) // 5 // 1 + 4
