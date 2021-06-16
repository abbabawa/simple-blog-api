const jwt = require('jsonwebtoken'),
    secret = require('../../common/config/env.config.js').jwt_secret,
    crypto = require('crypto');



exports.validJWTNeeded = (req, res, next) => {
    if (req.headers['authorization']) {
        try {
            let authorization = req.headers['authorization'].split(' ');
            if (authorization[0] !== 'Bearer') {
                return res.status(401).send();
            } else {
                req.jwt = jwt.verify(authorization[1], secret);
                return next();
            }

        } catch (err) {
            return res.status(403).send();
        }
    } else {
        return res.status(401).send();
    }
};

exports.isAdmin = (req, res, next)=>{
    let user = jwt.decode(req.headers['authorization'].split(' ')[1])
    if (user.userType > 1) {
        return next()
    }
    res.status(401).send({'error': "Not an admin"})
}

exports.isAuthor = (req, res, next)=>{
    let user = jwt.decode(req.headers['authorization'].split(' ')[1])
    if (user.userId == req.params.author) {
        return next()
    }
    res.status(401).send({'error': "Only an article's author can edit the article"})
}