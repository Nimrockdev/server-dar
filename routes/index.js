/*Routes configuration*/
const express = require('express');
const app = express();

app.use(require('./login'));
app.use(require('./clients'));
app.use(require('./policies'));


 

module.exports = app;