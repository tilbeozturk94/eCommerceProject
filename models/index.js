var mongoose = require("mongoose");
mongoose.set('debug',true);
mongoose.connect("mongodb://localhost/ecommerce-api");

mongoose.Promise = Promise;

module.exports.Order = require("./order");
module.exports.User = require("./user");
module.exports.Product = require("./product");