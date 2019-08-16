function formatDuration(seconds) {
  // const year = seconds /
  const year = Math.floor(seconds % 86400)
  year
  const day = Math.floor((seconds / 86400) % 365)
  day
  const hour = Math.floor((seconds / 3600) % 24)
  // const hour = Math.floor((seconds / 86400) % 24)
  console.log(Math.floor(seconds / 86400))
  console.log(Math.floor((seconds / 86400) % 24))
  hour
  const min = Math.floor((seconds % 3600) / 60)
  console.log(seconds % 3600)
  console.log(Math.floor((seconds % 3600) / 60))
  min
  const sec = Math.floor(seconds % 60)
  sec
}

console.log(formatDuration(1)) // "1 second"
console.log(formatDuration(62)) // "1 minute and 2 seconds"
console.log(formatDuration(120)) // "2 minutes"
console.log(formatDuration(3600)) // "1 hour"
console.log(formatDuration(7200)) // "2 hours"
console.log(formatDuration(3662)) // "1 hour, 1 minute and 2 seconds"
console.log(formatDuration(12345678)) // "1 hour, 1 minute and 2 seconds"
console.log(formatDuration(1234567890)) // "1 hour, 1 minute and 2 seconds"
