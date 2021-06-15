const UserModel = require("../models/user.model")
const ArticleModel = require("../models/article.model")
const ArticleDetailsModel = require("../models/article_details.model")
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
	ArticleModel.saveArticle(req.body)
		.then(article=>{
			res.status(200).send(article)
		}).catch(err=>{
			res.status(500).send(err)
		})
}

exports.getArticles = (req, res)=>{
	let limit = req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit) : 10;
    let page = 0;
    if (req.query) {
        if (req.query.page) {
            req.query.page = parseInt(req.query.page);
            page = Number.isInteger(req.query.page) ? req.query.page : 0;
        }
    }
	ArticleModel.list(limit, page).then((result)=>{
		res.status(200).send(result)
	}).catch(err=>{
			res.status(500).send(err)
		})
}

exports.getArticle = (req, res)=>{
	ArticleModel.getById(req.params.id)
		.then(article=>{
			res.status(200).send(article)
		}).catch(err=>{
			res.status(500).send(err)
		})
}