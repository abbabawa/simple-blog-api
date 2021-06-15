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
		.then((categories)=>{
			res.status(200).send(categories)
		}).catch(err=>{
			res.status(500).send(err)
		})
}

exports.category = (req, res)=>{
	Category.category(req.params.id).then((category)=>{
		res.status(200).send(category)
	}).catch(err=>{
			res.status(500).send(err)
		})
}

exports.createUser = (req, res)=>{
	UserModel.saveUser(req.body)
		.then(result=>{
			res.status(200).send(result)
		}).catch(err=>{
			res.status(500).send(err)
		})
}

exports.users = (req, res)=>{
	UserModel.list().then(users=>{
		res.status(200).send(users)
	}).catch(err=>{
			res.status(500).send(err)
		})
}

exports.user = (req, res)=>{
	UserModel.findById(req.params.id)
		.then(user=>{
			res.status(200).send(user)
		}).catch(err=>{
			res.status(500).send(err)
		})
}

exports.updateUser= (req, res)=>{
	UserModel.patchUser(req.params.id, req.body)
		.then(result=>{
			res.status(200).send(result)
		}).catch(err=>{
			res.status(500).send(err)
		})
}

exports.createArticle = (req, res)=>{
	
}