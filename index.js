const express = require('express');
// const bodyParser = require('body-parser');
const cors = require("cors");
const Knex = require("knex");
const { Model } = require("objection")
const knexconfig = require("./knexfile");
// Set up the express app
const app = express();
const port = process.env.PORT || 4000;
const routes = require("./Routes/route")
const path = require("path");
require("dotenv");

// knex intialization
const knex = Knex(knexconfig[ process.env.NODE_ENV || 'development']);
Model.knex(knex);

app.use(cors());
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.use(routes)

app.get('/check', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`, `DB-url = ${process.env.DATABASE_URL}`)
})