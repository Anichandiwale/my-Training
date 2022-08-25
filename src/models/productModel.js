const mongoose = require('mongoose');

const productSchema = new mongoose.Schema( {
    
    name:String,
	category:String,
	price:{type:Number,default:70}//mandatory property


}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema)
