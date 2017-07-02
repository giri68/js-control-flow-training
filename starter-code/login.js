console.log("login.js loaded");
var userLogin = {
	userName: "Giri",
	password: "giri"
}
var inputPassword;
var login = true;
while (login){
	inputPassword = prompt("Enter password for user " + userLogin.userName);
	if (inputPassword === userLogin.password){
		console.log("Password match!");
		login = false;
	} else {
		console.log("Password does not match, try again");
	}
}
