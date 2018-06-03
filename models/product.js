var mongoose = require("mongoose");

var productSchema = new mongoose.Schema ({
    
    name: String,
    img: String,
    stockQuantity: Number,
    description: String,
    price: Number
});

var Product = mongoose.model('Product', productSchema);

module.exports = Product;