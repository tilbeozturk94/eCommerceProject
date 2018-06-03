var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    
   name: String,
   address: String,
   creditCardNumber: String,
   products: String,
   methodOfDelivery: String
    
});

var User = mongoose.model('User', userSchema);

module.exports = User;