/*global $ */
$(document).ready(function(){
    var url = "https://wdb-part2-tilbeozturk.c9users.io/api/products/orders/neworder";
    
    $.get(url).then(function(data){
        mainFunc(data);
    });
});

function mainFunc(data){
    console.log(data);
    
    var count = data.length;
    
    var table = $("#tableOrder");
    
    var str = "<tr><td>1</td><td>" + data[count - 1].product.productName + "</td><td>" + data[count - 1].product.quantity + "</td><td>" + data[count - 1].methodOfDelivery + "</td></tr>";
    table.append(str);
    
}