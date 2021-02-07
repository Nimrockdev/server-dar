const express = require('express');
const config = require('./config/config');


//const mainRoutes = require('./routes/index')

const app = express();

var bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(require('./routes/index'));


app.listen(config.port, () => {

    console.log(`API Server Listening on http://localhost:${config.port}`);
    console.log(`Environment: ${config.dev}`);

});