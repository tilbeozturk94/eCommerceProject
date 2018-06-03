var express = require("express");
var router = express.Router();
var db = require("../models");
var Shoppingcart = require("../models/shoppingcart.js");


router.get("/",function(req,res){
   db.Product.find()
   .then(function(products){
       res.json(products);
   })
   .catch(function(err){
       res.send("Error while getting products: " + err);
   });
    
});

router.post("/",function(req,res){
   db.Product.create(req.body)
   .then(function(newProduct){
       res.status(201).json(newProduct);
   })
   .catch(function(err){
       res.send("Error while creating a product: " + err);
   });
});

router.get("/:id", function(req,res){
   db.Product.findById(req.params.id)
   .then(function(foundProduct){
      res.json(foundProduct);
   })
   .catch(function(err){
      res.send("Error while getting the product"+ err);
   });
});

router.post("/complete/shoppingcart", function(req,res){
   Shoppingcart.create(req.body)
   .then(function(newCartItem){
      res.status(201).json(newCartItem);
   })
   .catch(function(err){
      res.send("Error while creating the order" + err);
   });
});
router.get("/complete/shoppingcart", function(req,res){
   Shoppingcart.find().then(function(data){
      res.json(data);
   }).catch(function(err){
      res.send("Error while getting cart items " + err);
   });
});

router.put("/:id", function(req,res){
   db.Product.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
   .then(function(updatedProduct){
      res.json(updatedProduct);
   })
  .catch(function(err){
       res.send("Error while updating product " + err);
   });
});



module.exports = router;