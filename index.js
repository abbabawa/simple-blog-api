const express = require('express')
const app = express()

const bodyParser = require('body-parser')

const appRoutes = require("./routes")

// app.get('/', (req, res)=>{
// 	res.send("Welcome to simple blog api")
// })

app.use(bodyParser.json())
appRoutes.routesConfig(app)

app.listen(3000, (err)=>{
	if(err){
	 	console.log(err)
	}
	console.log("app listening on port 3000")
})