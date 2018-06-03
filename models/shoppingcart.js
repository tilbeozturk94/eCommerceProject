var mongoose = require("mongoose");

var shoppingcartSchema = new mongoose.Schema({
    
    productname: String,
    quantity: Number
});

var Shoppingcart = mongoose.model("Shoppingcart", shoppingcartSchema);

module.exports = Shoppingcart;