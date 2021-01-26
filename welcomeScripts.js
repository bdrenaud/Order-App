document.getElementById("appList").style.display = "none";

//order
    //id --interger--
    //email --string--
    //phone (optional) --string--
    //agreeToTerms --boolean--
    //list of items --array--
    //Total cost --decimal (also called float in c#)--

var order;

function submitOrder(event){
    event.preventDefault();
    var agreed = document.getElementById("agree").checked;
    if (agreed)
    {
        var newOrder = {
            id : Math.floor(Math.random() * 1000) + 1,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            agreeToTerms: true,
            items: [],
            total: 0.00
    }

    order = newOrder;

    console.log(order);
    document.getElementById("appWelcome").style.display = "none";
    document.getElementById("appList").style.display = "block";
}
else
{
    alert("YOU SHALL NOT PASS... Until you agree to terms =p")
}
}

function completeOrder(){
    console.log(order);
    document.getElementById("appList").style.display = "none";
    document.getElementById("appEnd").style.display = "block";
    
    var sum = 0;
    for(var i=0; i <this.order.items.length; i++){
        sum += parseFloat (this.order.items[i].cost);
    }


    document.getElementById("textNumber").innerHTML = this.order.phone;
    document.getElementById("totalCost").innerHTML = sum;
}
