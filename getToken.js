const fetch = require('node-fetch');
const config = require('./config/config');

  
const getToken = async function requestToken(user) {

    const url = config.urlLogin;
    let userBody=(JSON.stringify(user));

    const response = await fetch(url,
        {
            method: 'POST', 
           
            headers: {
              'Content-Type': 'application/json'
            },
            body: userBody
          }
    ).catch(err => console.error(err));

    const data = await response.json();
 

    return data;


};

module.exports = getToken;