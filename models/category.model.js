const mongoose = require('../common/services/mongoose.service').mongoose

const Schema = mongoose.Schema

const CategorySchema = new Schema({
	name: String
})

const Category = mongoose.model('Categories', CategorySchema)

exports.saveCategory = (category)=>{
	const cat = new Category({name: category})
	return cat.save()
}

exports.list = ()=>{
	return Category.find((err, categories)=>{
		if (err) {return err}
		else{
			return categories
		}
	})
}

exports.category = (id)=>{
	return Category.find({_id: id}, (err, category)=>{
		if(err){
			return err
		}else{
			return category[0]
		}
	})
}

exports.patchById = (id, data)=>{
	return Category.findOneAndUpdate({_id: id}, data)
}