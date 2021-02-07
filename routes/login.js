const express = require('express');
const getToken = require('../getToken');


const app = express();

app.post('/login', (req, res) => {
    
    let body=(req.body);
    getToken(body)
    .then(data => {
      
        if(data.statusCode) {
            res.send(data) 
        } else{
            res.send(data) 
        }   
    })
    .catch((e) => console.log(e))

});


module.exports = app;