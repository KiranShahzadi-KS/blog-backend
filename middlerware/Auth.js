const jwt = require('jsonwebtoken');

const authToken = async(req, res, next) => {   //next (middleware of express) = if token verify then it shift next method 
    if(req.headers.token){
        let userToken = req.headers.token;
        jwt.verify(userToken,"mern-stack",(err,decodedToken) =>{
            if(err){
                res.status(401)({
                    'error': 'invalid token'
                });
            }else{
                req._id = decodedToken.id;
                next();
            }
            ;
            
        });
        
    }else{
        res.json({
            'error':'invalid token!'
        })
    }
}

module.exports = {
    authToken
}