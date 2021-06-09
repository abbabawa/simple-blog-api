const mongoose = require('../common/services/mongoose.service')

const Schema = mongoose.Schema

const articleDetailsSchema = new Schema({
	detail: String,
	article: {Schema.Types.ObjectId, ref: Article, required: true}
})

const ArticleDetails = mongoose.model('ArticleDetails', articleDetailsSchema)