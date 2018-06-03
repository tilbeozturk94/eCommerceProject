var mongoose = require("mongoose");


var orderSchema = new mongoose.Schema({
    
   product: {
      productName: String,
      quantity: Number
   },
   userId: String,
   userName: String,
   methodOfDelivery: String
    
});

var Order = mongoose.model("Order", orderSchema);

module.exports = Order;