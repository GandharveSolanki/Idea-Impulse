require('dotenv').config();

const express = require('express');
const expressLayouts = require
    ('express-ejs-layouts');
const path = require('path');

const app = express();
const port = 5000 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//for static files
app.use(express.static(path.join(__dirname, "public")));

//templating engine setup
// Static Files
app.use(express.static('public'));

// Templating Engine
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');




//Routes
app.use('/', require('./server/routes/index'))

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})