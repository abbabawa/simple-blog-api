const AuthController = require('./controllers/auth.controller')
const VerifyUserMiddleware = require('./middlewares/verify.user.middleware')

exports.routesConfig = function(app){
	app.post("/auth", [
        VerifyUserMiddleware.hasAuthValidFields,
        VerifyUserMiddleware.isPasswordAndUserMatch,
        AuthController.login])
}