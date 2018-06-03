/*global $*/
/*global localStorage*/

$(document).ready(function(){
   
    var url = "https://wdb-part2-tilbeozturk.c9users.io/api/products" + localStorage.getItem("productID");
    
    $.get(url,function(product){
       mainFunction(product);
    });
   
  
    
});

function mainFunction(product){
    
        $("#productImage").attr("src", product.img);
        $("#productName").text(product.name);
        $("#productDescription").text(product.description);
        var url = "https://wdb-part2-tilbeozturk.c9users.io/api/products/" + product._id;
        
        
         $("#shoppingBasketBtn").on("click", function(){
         var num = $("#numberPicker").val();
     
        if(product.stockQuantity > 0)
        {
            if(num < product.stockQuantity)
          {  //post method for order


        $.post("https://wdb-part2-tilbeozturk.c9users.io/api/products/complete/shoppingcart", {
            
            productname: product.name, 
            quantity: num,
            price: product.price
            
        }).then(function(data){
            console.log(data);
            var updateData = {stockQuantity: product.stockQuantity - num};
            $.ajax({
                method: "PUT",
                url: url,
                data: updateData
            }).then(function(updatedData){
                console.log("Success on updating the product");
            }).catch(function(err){
                console.log(err);
            });
        });
    }
           else{
            //modal view will appear as a warning 
        }
        }
        else{
            //modal view will appear as a warning 
        }
       
    $("#numberPicker").val('');
   });
}