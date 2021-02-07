
let checkToken = (req, res, next) => {
   
    let token = req.get('authorization');
    
    if (!token){
        return res.status(401).json({
            ok: false,
            err: { message: 'Invalid Token' }
        });
    }

    const base64Url = token.split('.')[1];
    const decoded = Buffer.from(base64Url, 'base64').toString();
    let tokenDecoded = JSON.parse(decoded);
    
    
    try {
        let {clientId, iat, exp} = tokenDecoded;

        if(exp < Date.now() / 1000){
       
            return res.status(401).json({
                ok: false,
                err: { message: 'Token Expired' }
            });
        }

        next();

    } catch (error) {
     
       return res.status(401).json({
            ok: false,
            err: { message: 'Invalid Request' }
       });

    }

};

module.exports = checkToken;