const express = require('express')
const app = express()
const port = 3000
// Set EJS as templating engine
app.set('view engine', 'ejs');
var expressLayouts = require('express-ejs-layouts');
app.use(expressLayouts);
app.get('/', (req, res) => {
    res.locals = {
        title: 'Example',
        message: 'This is a message'
      };
      var csv= require('csv-parser')
      var fs=require('fs')
      const results  = []
      fs.createReadStream('sample_data.csv').pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', () => {
        console.log(results);
        res.json(results)
        // [
        //   { NAME: 'Daffy Duck', AGE: '24' },
        //   { NAME: 'Bugs Bunny', AGE: '22' }
        // ]
      });
   // res.render('login',{});
})

app.get('/database', (req, res) => {
    res.locals = {
        title: 'Example',
        message: 'This is a message'
      };
    res.render('database',{});
})
app.get('/dashboard', (req, res) => {
    res.locals = {
        title: 'Example',
        message: 'This is a message'
      };
    res.render('dashboard',{});
})
app.get('/table', (req, res) => {
    res.locals = {
        title: 'Example',
        message: 'This is a message'
      };
    res.render('table',{});
})
app.get('/charts', (req, res) => {
    res.locals = {
        title: 'Example',
        message: 'This is a message'
      };
    res.render('charts',{});
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})