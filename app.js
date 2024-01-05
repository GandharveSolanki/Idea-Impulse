require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 5000 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//for static files
app.use(expres.static('public'));

//templating engine setup
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index');
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})