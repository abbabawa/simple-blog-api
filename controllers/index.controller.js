const UserModel = require("../models/user.model")
const ArticleModel = require("../models/article.model")
const Category = require("../models/category.model")

exports.addCategory = (req, res)=>{
	Category.saveCategory(req.body.name).then(result=>{
		res.status(201).send({id: result._id})
	})
}

exports.categoryList = (req, res)=>{
	Category.list()
		.then((err, categories)=>{
			if(err){
				res.status(501).send(err)
			}
			res.status(200).send(categories)
		})
}

exports.createArticle = (req, res)=>{
	
}