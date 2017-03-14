



function main() {

    //set up reference to our form, since 
    var form = document.getElementById("productForm");
    form.addEventListener("change",formChanged); /* change listens to change event then formChange activated when form changes */
    
   
 
    
}

/**
  onChange callback function
**/
function formChanged(event) {
    
    var form = document.getElementById("productForm");   
    
    var subTotal = 0;
    var shipping = 0;
    var taxes = (20/100) * subTotal;
    var total = subTotal + taxes + shipping;
    var choices = "";

for (var i=0; i < form.extras.length;i++) {
    
    if (form.extras[i].checked) {
        
    numberTotal =  parseInt(form.product[i].dataset.price);
    subTotal = subTotal +  numberTotal; 
    
     choices=choices + "<p>" + form.extra[i].dataset.data.disc + "</p>"
        
    } /* end of if */
    } /* end of loop */
    if (subTotal<100){
        
        shipping=10
    }/* end of if */
    
document.getElementById("sub-total").innerHTML =  "£" + subTotal;
document.getElementById("shipping").innerHTML =  "£" + shipping;
document.getElementById("taxes").innerHTML =  "£" + taxes;
document.getElementById("total").innerHTML = "£" + total;
    

}


