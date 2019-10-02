# Noken API

DFS algorithm implementation for the [noken challenge](https://github.com/baytelman/backend-interview). <br />
Check the `start/noken.js` file.

### Set Words

POST url: https://noken.herokuapp.com/set_words

```bash
body: { "words": [ "array", "arrays", "art", ... ] }
```

or use [these words](https://raw.githubusercontent.com/baytelman/backend-interview/master/files/dictionary.json).

### Set Board

POST url: https://noken.herokuapp.com/set_board

```js
body: { "board": [ "A", "B", "C", ... ] }
```
or use [this board](https://raw.githubusercontent.com/baytelman/backend-interview/master/files/test-board-1.json).

### Query

POST url: https://noken.herokuapp.com/query

```js
body: { "word": "fab" }
```
