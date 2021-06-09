const express = require('express')
const app = express()

app.get('/', (req, res)=>{
	res.send("Welcome to simple blog api")
})

app.listen(3000, (err)=>{
	if(err){
	 	console.log(err)
	}
	console.log("app listening on port 3000")
})