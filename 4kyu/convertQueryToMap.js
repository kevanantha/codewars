function convertQueryToMap(query) {
  query = query.split('&')
  let result = []

  for (let i = 0; i < query.length; i++) {
    const splitEq = query[i].split('=')
    const key = splitEq[0].split('.')
    const value = splitEq[1] ? decodeURIComponent(splitEq[1]) : splitEq[1]
    let temp = { [key[key.length - 1]]: value }
    for (let j = key.length - 2; j >= 0; j--) {
      temp = { [key[j]]: temp }
    }
    result.push(temp)
  }
  const final = mergeObjects({}, ...result)

  return final
}

function mergeObjects(target) {
  for (let i = 1; i < arguments.length; i++) {
    let from = arguments[i]
    if (typeof from !== 'object') continue
    for (let j in from) {
      if (from.hasOwnProperty(j)) {
        target[j] =
          typeof from[j] === 'object'
            ? mergeObjects({}, target[j], from[j])
            : from[j]
      }
    }
  }

  return target
}

console.log(
  convertQueryToMap(
    'user.name.firstname=Bob&user.name.lastname=Smith&user.favoritecolor=Light%20Blue'
  )
)

// Converts a URL Query String into an object map
function convertQueryToMap(query) {
  var obj = {}
  query.split('&').map(function(params) {
    var parts = params.split('=')
    if (!parts[1]) return {}
    parts[0].split('.').reduce(function(cur, next, i, arr) {
      if (!cur[next]) cur[next] = {}
      if (i === arr.length - 1) cur[next] = decodeURIComponent(parts[1])
      return cur[next]
    }, obj)
  })
  return obj
}
