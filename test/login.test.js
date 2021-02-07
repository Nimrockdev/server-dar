const getToken = require('../getToken');
const config = require('../config/config');



describe('Test Unitarios', () => {

  test('Revisar que no vuelva el mismo token de ejemplo', () => {
  
    let token= {
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRJZCI6ImRhcmUiLCJpYXQiOjE2MTI2MzgzNDMsImV4cCI6MTYxMjYzODk0M30.crfLZVyN30MQ0yJ3dCbyRRuet15zbFVxokp2BFRwf4c",
      "type": "Bearer"
    };
  
    let user = {
      "client_id": "dare",
      "client_secret": "s3cr3t"
    };
  
  
    var dataE;
    getToken(user)
    .then(data => {
      
        if(data.statusCode) {
          dataE = (data); 
          
        } else{
          dataE = (data); 
        }  
         
    })
    .catch((e) => console.log(e))
  
    expect(dataE).not.toBe(token);
  });




  
})