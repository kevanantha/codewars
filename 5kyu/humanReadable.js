function humanReadable(seconds) {
  if (!seconds) return '00:00:00'

  const hours = ('0' + Math.floor(seconds / 3600)).slice(-2)
  const mins = ('0' + Math.floor((seconds % 3600) / 60)).slice(-2)
  const secs = ('0' + (seconds % 60)).slice(-2)

  return `${hours}:${mins}:${secs}`
}

console.log(humanReadable(0)) // 00:00:00
console.log(humanReadable(5)) // 00:00:05
console.log(humanReadable(60)) // 00:01:00
console.log(humanReadable(120)) // 00:02:00
console.log(humanReadable(21212)) // 05:32:32
console.log(humanReadable(86399)) // 23:59:59
console.log(humanReadable(359999)) // 99:59:59
