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


function whatName() {
	var userName = document.getElementById("nameInput").value;
	document.getElementById("nameOutput").innerHTML ="<p>" + "Is your name really " + userName + "?" + "</p>";
}

function printSomething() {
	console.log("Hey, I printed something - happy now?");
}

function countBeer() {
	for (i = 99; i >= 0; i--) {
    console.log(i + " bottles of root beer on the wall, " + i + " bottles of root beer...take one down, pass it around " + i + " bottles of root beer on the wall." + "<br />")
	}
}