var age = prompt("Please Enter Your Age");

if (Number (age) <18 ){

	alert("Sorry, you are too young to drive.");
} else if (Number (age) ===18 ){

	alert("Congrats on passing! Enjoy the ride")
} else if (Number (age) >18){

	alert("Vroom Vroom")
}

//prompt welcomes the user and gives the information, and then the user inputs this. When they put in less then 18, the browser alerts the user
//that they are too young to drive. If they enter exactly 18, it congratulates them on passing. If over 18, the engine makes a noise.
//I made this to learn about else if and the prompt/alert useage. 