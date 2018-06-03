/*global $ */ 

$(document).ready(function(){
    
    var url = "https://wdb-part2-tilbeozturk.c9users.io/api/products/complete/shoppingcart";
    $.get(url).then(function(cartItems){
        console.log(cartItems);
        mainFunc(cartItems);
       
    })
    .catch(function(err){
        console.log(err);
    });
    
    
});

function mainFunc(data){
    
    var table = $("#productTable");
    var thead = "<thead><tr><th>Number</th><th>Product Name</th><th>Quantity</th><th>Price</th></tr></thead><tbody>";
    table.append(thead);
    var str = "";
    var count = 1;
    
     for(let i = 4 ; i< data.length; i++){
      str = str + "<tr><td>" + count + "</td><td>" + data[i].productname + "</td><td>" + data[i].quantity + "</td><td>" + data[i].price + "</td></tr>" ;
    }  
    
    str = str + "</tbody>";
    table.append(str);
}