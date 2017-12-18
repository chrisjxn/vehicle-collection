require('dotenv').config();
const express = require('express');
const massive = require('massive');
const bodyParser = require('body-parser');

const controller = require('./controllers/controller');

const app = express();

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
})

// endpoints


const PORT = 3030;
app.listen(PORT, console.log(`Server listening on port ${PORT}`));
