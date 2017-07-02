console.log("security_questions.js loaded");
var securityQuestions = [
{question: "What is your first pet name?",
	expectedAnswer: "Piku"

},
{question: "What is your birth place?",
	expectedAnswer: "Siri"

},
{question: "What is your best friend name?",
	expectedAnswer: "Ajay"

}
]
var userAnswer = "";
for (var i = 0; i < securityQuestions.length; i++){
	userAnswer = prompt(securityQuestions[i].question);
	if (userAnswer !== securityQuestions[i].expectedAnswer){
		alert("wrong security answer");
		break;
	}
}
