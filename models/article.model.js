const mongoose = require('../common/services/mongoose.service').mongoose

const Schema = mongoose.Schema

const articleSchema = new Schema({
	title: String,
	category: {type: Schema.Types.ObjectId, ref: 'Category', required: true},
	user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
	details: [String]
})

const Article = mongoose.model('Articles', articleSchema)

exports.saveArticle = (article)=>{
	const obj = new Article(article)
	return obj.save()
}

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

exports.updateArticle = (id, updateData)=>{
	return Article.findOneAndUpdate({_id: id}, updateData)
}