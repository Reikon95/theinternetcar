function checkDriverAge(){
alert("Welcome to the keyless car - let's go!");
var age = prompt("Wait, how old are you?");

if (age > 18){
	alert("Vrooooooom");
} else if (age < 18){
	alert("Sorry, you're too young to drive. Powering off");
} else if (age === 18) {
		alert("Well done on passing your test, time to drive!");
} 
}

checkDriverAge();
