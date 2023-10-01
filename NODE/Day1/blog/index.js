/*
npm init
npm i express
run: node index.js

npm i nodemon --save-dev
"scripts": {
    "start": "nodemon index.js",
    // --inspect to debug with node
    // "start": "nodemon --inspect index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
},
run: npm start
*/

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})