const appController = require("./controllers/index.controller")

exports.routesConfig = function(app){
	app.post("/add_category", [appController.addCategory])

	app.get("/categories", [appController.categoryList])

	app.get("/category/:id", [appController.category])

	app.post("/user", [appController.createUser])

	app.get("/users", [appController.users])

	app.get("/user/:id", [appController.user])

	app.patch("/user/:id", [appController.updateUser])
}