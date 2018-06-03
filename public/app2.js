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
        
        
        
         $("#shoppingBasketBtn").on("click", function(){
         var num = $("#numberPicker").val();
     
        if(product.stockQuantity > 0)
        {
            if(num < product.stockQuantity)
          {  //post method for order


        $.post("https://wdb-part2-tilbeozturk.c9users.io/api/products/complete/shoppingcart", {
            
            productname: product.name, 
            quantity: num
            
        },function(data,status){
            console.log(data + " " + status);
        });
    }
           else{
            //modal view will appear as a warning 
        }
        }
        else{
            //modal view will appear as a warning 
        }
       
   });
}