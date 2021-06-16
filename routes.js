const appController = require("./controllers/index.controller")
const AuthMiddleware = require("./auth/middlewares/auth.validation.middleware")

exports.routesConfig = function(app){
	app.post("/add_category", 
			[
				AuthMiddleware.validJWTNeeded,
				AuthMiddleware.isAdmin,  
				appController.addCategory
			])

	app.get("/categories", 
			[
				AuthMiddleware.isAdmin, 
				AuthMiddleware.validJWTNeeded,
				appController.categoryList
			])

	app.get("/category/:id", [appController.category])

	app.patch("/category/:id", 
			[
				AuthMiddleware.validJWTNeeded, 
				AuthMiddleware.isAdmin, 
				appController.updateCategory
			])

	app.post("/user", [appController.createUser])

	app.get("/users", [appController.users])

	app.get("/user/:id", [appController.user])

	app.patch("/user/:id", [AuthMiddleware.validJWTNeeded, appController.updateUser])

	app.post("/article", [AuthMiddleware.validJWTNeeded, appController.createArticle])

	app.get("/articles", [appController.getArticles])

	app.get("/article/:id", [appController.getArticle])

	app.patch("/article/:id", [AuthMiddleware.validJWTNeeded, AuthMiddleware.isAuthor, appController.editArticle])

	app.get("/articles/:category", [appController.getArticlesByCategory])
}