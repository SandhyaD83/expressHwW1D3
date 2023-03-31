//----require----
const express = require('express')
const app = express()
const magic8ball = require('./model/magic8ball.js')
const port = 3000
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.get('/greeting', (req, res) => {
    res.send("Hello Starnger")
})
app.get('/greeting/:name', (req, res) => {
    res.send("Hello " + req.params.name)
})
app.get('/tip/:total/:tipPercentage', (req, res) => {
    const tip = (req.params.tipPercentage / 100) * req.params.total
    res.send("tip:" + " " + tip)
})
app.get('/magic/:question', (req, res) => {
    res.send(magic8ball[Math.floor(Math.random() * 9)])
})
app.get('/', (req, res) => {
    res.render('passitaround')
})
app.get('/:no_of_bottles', (req, res) => {
    res.render('passitaround', { index: req.params.no_of_bottles })
})

app.get('/Fibonnaci/:number', (req, res) => {

    res.render('fiblogic', { num: req.params.number })
})

app.listen(port, () => {
    console.log(`listening to port ${port}`);
})