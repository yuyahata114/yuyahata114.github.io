
function Welcome(){
    alert("Welcome to YU's store!");
}

function Info(){
    let person = prompt("Please enter your name", "Harry Potter");
    let item = prompt("Please enter the item", "Apple");
    let num = prompt("Please enter the amount", "1~99");

    let time = new Date().getHours();
    let greeting;

    if(time < 12){
        greeting = "Good Morning";
    }else{
        greeting = "Good Afternoon";
    }

    document.getElementById("greeting").textContent = 
    greeting + " " + person + ",  Thank you for Ordering!";
            
    let orderDate = new Date();
    let arrivalDate = new Date(orderDate);
    arrivalDate.setDate(orderDate.getDate() + 7);

    document.getElementById("orderInfo").innerHTML =
    "Customer Name: " + person + "<br>" +
    "Item: " + item + "<br>" +
    "Quantity: " + num + "<br>" +
    "Expected Arrival Date: " + arrivalDate.toLocaleDateString();

}

Welcome();
Info();