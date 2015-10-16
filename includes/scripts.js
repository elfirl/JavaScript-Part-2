function whatNumber () {
	var userNumber = document.getElementById("numberInput");
	if (userNumber < 10 )
		alert ("Your number is less than 10!")
	else
		alert("You picked " + userNumber + " which is more than 10!")
}