/* global $ */

$(document).ready(function(){
    
        var method ="";
         $('#demolist li').on('click', function(){
          method = $(this).text();
        });
      
      var dataArr = [];
      $.get("https://wdb-part2-tilbeozturk.c9users.io/api/products/complete/shoppingcart").then(function(data){
          console.log(data);
          dataArr = data;
      });
      
   $("#allComplete").on("click", function(){
   
           createOrder(dataArr, method);
           createUser(dataArr, method);
             
       deleteShoppingcart();
   });
    
});

function createOrder(product, method){
    
   
    
    var orderUrl = "/api/products/orders/neworder";
    
    $.post(orderUrl,{
        product: {
          productName: product[0].productname,
          quantity: product[0].quantity
            },
       userId: "1234567890",
       userName: document.getElementById("userName").value,
       methodOfDelivery: method
    });
    
}

function createUser(product, method){
    
var userUrl = "/api/products/complete/users";

$.post(userUrl, {
       name: $("#userName").val(),
       address: $("#userAddress").text(),
       creditCardNumber: $("#userCard").text(),
       products: product.productname,
       methodOfDelivery: method
});

    
}

function deleteShoppingcart(){
    
      var deleteUrl ="/api/products/complete/shoppingcart"; 
        $.ajax({
            url: deleteUrl,
            method: "DELETE"
        }).then(function(){
             $('#productTable').remove();
        }).catch(function(err){
            console.log(err);
        });   
} 