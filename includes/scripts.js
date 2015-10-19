function whatNumber() {
	var userNumber = parseInt(document.getElementById("numberInput").value);
	
	if(userNumber < 10) {
		alert("Your number is less than 10!")
	} else if(userNumber > 20) {
		alert("Your number is larger than 20, please pick a number between 1 and 20.");
	} else if(userNumber > 10 && userNumber < 20) {
		alert("You picked " + userNumber + " which is more than 10!");
	}
	else {
		alert("You didn't pick a number. Please pick a number between 1 and 20.");
	}
}

