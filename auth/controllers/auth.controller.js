const jwtSecret = require('../../common/config/env.config.js').jwt_secret,
    jwt = require('jsonwebtoken');
const crypto = require('crypto');

const UserModel = require("../../models/user.model")

exports.login = (req, res)=>{
	try{
		let refreshId = req.body.userId + jwtSecret;
		let salt = crypto.randomBytes(16).toString('base64');
		let hash = crypto.createHmac('sha512', salt).update(refreshId).digest("base64");
		req.body.refreshKey = salt;
		//Access token for making api calls to protected endpoints
		let token = jwt.sign(req.body, jwtSecret);
		let b = Buffer.from(hash);
		let refresh_token = b.toString('base64');
		res.status(201).send({accessToken: token, refreshToken: refresh_token});
	}catch(err){
		res.status(500).send({errors: err});
	}
}