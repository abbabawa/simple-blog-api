const appController = require("./controllers/index.controller")

exports.routesConfig = function(app){
	app.post("/add_category", [appController.addCategory])

	app.get("/categories", [appController.categoryList])
}