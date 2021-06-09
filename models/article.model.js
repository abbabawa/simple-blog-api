const mongoose = require('../common/services/mongoose.service')

const Schema = mongoose.Schema

const articleSchema = new Schema({
	title: String,
	category: {Schema.Types.ObjectId, ref: Category, required: true},
	user: {Schema.Types.ObjectId, ref: User, required: true}
})

const Article = mongoose.model('Articles', articleSchema)

exports.list = (perPage, page)=>{
	return new Promise((resolve, reject)=>{
		Article.find()
			.limit(perPage)
			.skip(perPage * page)
			.exec((err, articles)=>{
				if(err){
					reject(err)
				}else{
					resolve(articles)
				}
			})
	})
}

exports.getById = (id)=>{
	return Article.findById(id).then(article=>{
		return article
	})
}

exports.getByCategory = (category)=>{
	return Article.find({category: category}).then(articles=>{
		return articles
	})
}