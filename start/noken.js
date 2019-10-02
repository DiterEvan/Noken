'use strict'

/* Globals */

let words, board = [], word
let m = []


/* DFS Algorithm */

function dfs (x, y, pos) {

  if(x == -1 || x == 4) return false
  if(y == -1 || y == 4) return false

  if(m[x][y] == 1) return false

  if(pos == word.length) return true

  const c = word.charAt(pos)
  if(board[x][y].toLowerCase() != c.toLowerCase()) return false

  m[x][y] = 1

  let ret = false

  if(dfs(x,     y - 1, pos + 1)) ret = true
  if(dfs(x - 1, y - 1, pos + 1)) ret = true
  if(dfs(x - 1, y,     pos + 1)) ret = true
  if(dfs(x - 1, y + 1, pos + 1)) ret = true
  if(dfs(x,     y + 1, pos + 1)) ret = true
  if(dfs(x + 1, y + 1, pos + 1)) ret = true
  if(dfs(x + 1, y,     pos + 1)) ret = true
  if(dfs(x + 1, y - 1, pos + 1)) ret = true

  m[x][y] = 0

  return ret
}


/* Valid word on Board */

function valid_word_on_board () {

  m = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]]

  const c = word.charAt(0)

  for(let i = 0; i < 4; i++) {
    for(let j = 0; j < 4; j++) {
      if(board[i][j].toLowerCase() == c.toLowerCase())
        if(dfs(i, j, 0)) return true
    }
  }

  return false
}


/* API Methods */

class Noken {
  constructor(Route) {

    // POST url: /set_words, body: { "words": [ "array", "arrays", "art", ... ] }

    Route.post('/set_words', ({ request }) => {

      words = request.all().words

      return 'words added'
    })


    // POST url: set_board, body: { "board": [ "A", "B", "C", ... ] }

    Route.post('/set_board', ({ request }) => {

      const arr = request.all().board

      let row = []

      arr.forEach((c, i) => {

        row.push(c)

        if(i % 4 == 3) board.push(row), row = [];
      })

      return {msg: 'board added', board}
    })


    // POST url:/query, body: { "word": "fab" }

    Route.post('/query', ({ request }) => {

      word = request.all().word

      if(word.length < 3) return 'very small word :('

      if(words.indexOf(word.toLowerCase()) == -1) return 'word is not in dictionary :('

      if(!valid_word_on_board()) return 'invalid word :('

      return 'valid word :)'
    })
  }
}

module.exports = Noken
