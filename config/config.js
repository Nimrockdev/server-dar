require('dotenv').config({ silent: process.env.NODE_ENV === 'prod' });

const config = {
    dev: process.env.NODE_ENV,
    port: process.env.PORT,
    urlLogin: process.env.URLLOGIN,
    client_id: process.env.CLIENTID,
    client_secret: process.env.CLIENT_SECRET,
    urlClients: process.env.URLCLIENTS,
    urlPolicies: process.env.URLPOLICIES
}

module.exports = config;

