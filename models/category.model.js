const mongoose = require('../common/services/mongoose.service')

const Schema = mongoose.Schema

const CategorySchema = new Schema({
	name: String
})

const Category = mongoose.model('Categories', CategorySchema)

exports.addCategory = (category)=>{
	const category = new Category({category})
	return category.save()
}

exports.list = ()=>{
	return Category.find((err, categories)=>{
		if (err) {return err}
		else{
			return categories
		}
	})
}