const express = require('express');
const checkToken = require('../middlewares/authentification');
const {getPolicies, getPoliciesByID} = require('../getPolicies');
const config = require('../config/config');

const app = express();

app.get('/policies', checkToken,(req, res) => {
    getPolicies( req.get('authorization'))
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
