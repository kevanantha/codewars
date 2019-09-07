let board = [
  [1, 0, 5, 8, 0, 2, 0, 0, 0],
  [0, 9, 0, 0, 7, 6, 4, 0, 5],
  [2, 0, 0, 4, 0, 0, 8, 1, 9],
  [0, 1, 9, 0, 0, 7, 3, 0, 6],
  [7, 6, 2, 0, 8, 3, 0, 9, 0],
  [0, 0, 0, 0, 6, 1, 0, 5, 0],
  [0, 0, 7, 6, 0, 0, 0, 3, 0],
  [4, 3, 0, 0, 2, 0, 5, 0, 1],
  [6, 0, 0, 3, 0, 8, 9, 0, 0]
]
function solve(board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 0) {
        for (let input = 1; input <= 9; input++) {
          if (check(i, j, input) == true) {
            board[i][j] = input
          } else {
            return solve(board)
          }
        }
      }
    }
  }
  return board
}
console.log(board)
console.log(solve(board))
function check(row, col, value) {
  if (
    verticalCheck(col, value) === true &&
    horizontalCheck(row, value) === true &&
    checkbox(row, col, value) === true
  ) {
    return true
  } else return false

  function verticalCheck(x, value) {
    for (let i = 0; i < board.length; i++) {
      if (board[i][x] === value) return false
    }
    return true
  }

  function horizontalCheck(y, value) {
    for (let i = 0; i < board.length; i++) {
      if (board[y][i] === value) return false
    }
    return true
  }

  function checkbox(row, col, value) {
    let rows = Math.floor(row / 3) * 3
    let cols = Math.floor(col / 3) * 3

    for (let i = rows; i < rows + 3; i++) {
      for (let j = cols; j < cols + 3; j++) {
        if (board[i][j] === value) return false
      }
    }
    return true
  }
}

// 'use strict'

// class Sudoku {
//   constructor(board_string) {
//     this.board_string = board_string
//   }

//   checkHori(safeNumber) {
//     const { board, row, col, input } = safeNumber
//     for (let i = 0; i < 9; i++) {
//       if (board[row][i] == input) return false
//       return false
//     }
//   }

//   solve(board) {
//     // const board = this.board()

//     for (let i = 0; i < 9; i++) {
//       for (let j = 0; j < 9; j++) {
//         if (board[i][j] == ' ') {
//           for (let k = 1; k <= 9; k++) {
//             const safeNumber = { board, row: i, col: j, input: k }
//             if (this.checkHori(safeNumber)) {
//               board[i][j] = `${safeNumber.input}`
//             }
//           }
//           return false
//         }
//       }
//     }
//     console.log(board)
//     return true
//   }

//   // Returns a string representing the current state of the board
//   board() {
//     const board = []

//     for (let i = 0; i < this.board_string.length; i += 9) {
//       const temp = []
//       for (let j = 0; j < 9; j++) {
//         if (this.board_string[i + j] == 0) {
//           temp.push(' ')
//         } else {
//           temp.push(this.board_string[i + j])
//         }
//       }
//       board.push(temp)
//     }
//     // console.log(this.solve(board))
//     // return this.solve(board)
//     return board
//   }
// }

// // The file has newlines at the end of each line,
// // so we call split to remove it (\n)
// var fs = require('fs')
// var board_string = fs
//   .readFileSync('set-01_sample.unsolved.txt')
//   .toString()
//   .split('\n')[0]

// var game = new Sudoku(board_string)

// // Remember: this will just fill out what it can and not "guess"
// const board = game.board()
// console.log(game.solve(board))
// // console.log(game.solve())

// // console.log(game.board())
