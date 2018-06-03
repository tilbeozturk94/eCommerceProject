/* global $ */
/*global localStorage*/

$(document).ready(function(){

var url = "https://wdb-part2-tilbeozturk.c9users.io/api/products";

$.get(url,function(data){
    mainFunc(data);
});
 
 $("#firstThreeProduct").on("click","a",function()
    {
        var id = $(this).attr("href");
        localStorage.setItem("productID",id);
      
    });
});



function mainFunc(data){
    console.log(data);
   
   
    var div = $("#firstThreeProduct");
    
    for(var i=1;i<data.length;i++){
        
        let fixedStr = '<div class="col-sm-6 col-md-4"><div class="thumbnail">';
        let imgStr = '<img src="' + data[i].img +'"id="productImg"';
        let captionStr = '<div class="caption">';
        let thumbnailHeader = '<h3>' + data[i].name + '</h3>';
        let thumbnailPara = '<p>' + data[i].description + '</p>';
        let buttonString = ' <p><a href="/' + data[i]._id + '"' +  'class="btn btn-primary" role="button">Product Details</a></p></div></div></div>';
        let combinationStr = fixedStr + imgStr + captionStr + thumbnailHeader + thumbnailPara + buttonString;
        div.append(combinationStr); //adding products to the div
    }
    
 
}
