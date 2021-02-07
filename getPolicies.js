const fetch = require('node-fetch');
const config = require('./config/config');

 
const getPolicies = async function request( token) {
    
    const response = await fetch(config.urlPolicies,
        {
            method: 'GET', 
           
            headers: {
              'Content-Type': 'application/json',
              'authorization': token
            }
          }
    ).catch(err => console.error(err));

    const data = await response.json();

    return data;

}

//more requests

module.exports = getPolicies;

module.exports = {
  getPolicies  
}