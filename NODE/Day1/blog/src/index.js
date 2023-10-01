/*
npm init

--express : libary to create server 
npm i express
run: node index.js

--nodemon : to debug and no need to reload
npm i nodemon --save-dev
"scripts": {
    "start": "nodemon index.js",
    // --inspect to debug with node
    // "start": "nodemon --inspect index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
},
run: npm start

--morgan obser the log from client to node server
npm i morgan --save-dev

--express handlebars
npm i express-handlebars

--sass
npm i node-sass --save-dev 
*/


const express = require('express');
const handlebars = require('express-handlebars');
// const { engine } = require("express-handlebars");
const morgan = require('morgan');
const path = require('path');

const app = express();
const port = 3000

// Use static folder
app.use(express.static(path.join(__dirname, 'public')));

// HTTP Logger
app.use(morgan('combined'))

// Template Engine  
app.engine(
  'hbs',
  handlebars({
      extname: '.hbs',
      helpers: {
          sum: (a, b) => a + b,
      },
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// console.log(path.join(__dirname),'\\resources\\views');

app.get('/', (req, res) => {
  // res.send('Hello World!')
  res.render('home');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})