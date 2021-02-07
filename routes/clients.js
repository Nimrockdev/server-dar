const express = require('express');
const checkToken = require('../middlewares/authentification');
const getClients = require('../getClients');
const config = require('../config/config');

const app = express();

app.get('/clients', checkToken,(req, res) => {
    getClients( req.get('authorization'))
    .then(data => {
        if(data.statusCode) {
            res.send(data); 
        } else { 
            res.send(data);
        }   
    })
    .catch((e) => console.log(e))

});




module.exports = app;