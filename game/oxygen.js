var correctAnswer = Math.floor(Math.random() * 6) + 1;
var chances = 3;

function checkAnswer(answer) {
	var resultDiv = document.getElementById("result");
	if(answer == correctAnswer) {
		resultDiv.innerHTML = "Congratulations! You have found the correct oxygen source. You are alive!";
		resultDiv.style.color = "#4CAF50";
		disableButtons();
	} else {
		chances--;
		if(chances > 0) {
			resultDiv.innerHTML = "Sorry, wrong option. You have " + chances + " chances left.";
			resultDiv.style.color = "#F44336";
		} else {
			resultDiv.innerHTML = "Game over! You couldn't find the correct oxygen source. You are dead!";
			resultDiv.style.color = "#F44336";
			disableButtons();
		}
	}
}

function disableButtons() {
	document.getElementById("option1").disabled = true;
	document.getElementById("option2").disabled = true;
	document.getElementById("option3").disabled = true;
	document.getElementById("option4").disabled = true;
	document.getElementById("option5").disabled = true;
	document.getElementById("option6").disabled = true;
	// document.getElementById("option7").disabled = true;
	// document.getElementById("option8").disabled = true;
	// document.getElementById("option9").disabled = true;
	// document.getElementById("option10").disabled = true;
}
