function rot13(message) {
  const rot = {
    a: 'n',
    b: 'o',
    c: 'p',
    d: 'q',
    e: 'r',
    f: 's',
    g: 't',
    h: 'u',
    i: 'v',
    j: 'w',
    k: 'x',
    l: 'y',
    m: 'z',
    n: 'a',
    o: 'b',
    p: 'c',
    q: 'd',
    r: 'e',
    s: 'f',
    t: 'g',
    u: 'h',
    v: 'i',
    w: 'j',
    x: 'k',
    y: 'l',
    z: 'm'
  }

  let result = ''
  for (let i = 0; i < message.length; i++) {
    if (/[^\w\s\n\t]/.test(message[i]) || message[i] == ' ' || /[\d]/.test(message[i])) {
      result += message[i]
    } else if (message[i] == message[i].toLowerCase()) {
      result += rot[message[i]]
    } else if (message[i] == message[i].toUpperCase()) {
      result += rot[message[i].toLowerCase()].toUpperCase()
    }
  }
  return result
}

// console.log(rot13('Akbar fitra'))
console.log(rot13('Gusti Kade Merta Dwi Putra'))
console.log(rot13('Ciputri ? 21'))
// console.log(rot13('kevin'))
// console.log(rot13('Test'))
