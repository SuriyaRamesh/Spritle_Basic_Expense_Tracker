

// display the balance amount

var balance = 0;
document.getElementById("balance-amt").innerHTML = balance;

//get current date
var today = new Date();
function getCurrentDate() {

var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
return date;
}

//get current time
function getCurrentTime() {
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
return time;
}

var type;

var amtIncreaseBtn = document.getElementById("addBtn");
amtIncreaseBtn.onclick = function(event) {
	type = "Add";
	var amt = document.getElementById("amount").value;
	console.log("amount :", amt);
	console.log(typeof(amt));
	balance = parseInt(balance) + parseInt(amt);
	console.log("balance : ", balance);
	console.log(typeof(balance));
	document.getElementById("balance-amt").innerHTML = balance;

	addTransaction(getCurrentDate(),getCurrentTime(), amt, type);
}

var amtDecreaseBtn = document.getElementById("removeBtn");
amtDecreaseBtn.onclick = function(event) {
	type = "Remove";
	var amt = document.getElementById("amount").value;
	console.log("amount :", amt);
	console.log(typeof(amt));
	balance = parseInt(balance) - parseInt(amt);
	console.log("balance : ", balance);
	console.log(typeof(balance));
	document.getElementById("balance-amt").innerHTML = balance;

	addTransaction(getCurrentDate(),getCurrentTime(), amt, type);
}




//Add transaction details

var transactionId = 1;
function addTransaction(currentDate, currentTime, transactionType, amountValue) {

	var tableContent = document.querySelector("tbody");
	tableContent.innerHTML += "<tr><td>"+currentDate+"T"+currentTime+"."+transactionId+" - "+transactionType+" - "+amountValue+"</td></tr>";
	transactionId += 1;
}