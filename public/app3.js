/*global $ */ 

$(document).ready(function(){
    
    var url = "https://wdb-part2-tilbeozturk.c9users.io/api/products/shoppingcart";
    $.get(url).then(function(cartItems){
        mainFunc(cartItems);
    })
    .catch(function(err){
        console.log(err);
    });
    
});

function mainFunc(data){
    
    
}