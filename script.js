function calc(){
	var prompt1 = window.prompt("Enter number:", "0");
	var opt = window.prompt("Enter Operator(ex: +, *,- or /): ");
	var prompt2 = window.prompt("Enter another number:", "0");
	//parseFloat() turns a string to a number or decimal else, if the prompt deos not enter a numerical value then its not a number
	var num1 = parseInt(prompt1);
	var num2 = parseInt(prompt2);
	
	if (opt === "+"){
		//writes the answer of what you typed in the prompt
		document.write("<h1>Calculator</h1>");
		document.write("Click reload to calculate again.");
		document.write("<br><stong>Your answer:</strong> ")
		document.write(num1 + num2);
	}
	if (opt === "-"){
		document.write("<h1>Calculator</h1>");
		document.write("Click reload to calculate again.");
		document.write("<br><stong>Your answer:</strong> ")
		document.write(num1 - num2);
	}
	if (opt === "*"){
		document.write("<h1>Calculator</h1>");
		document.write("Click reload to calculate again.");
		document.write("<br><stong>Your answer:</strong> ")
		document.write(num1 * num2);
	}
	if (opt === "/"){
		document.write("<h1>Calculator</h1>");
		document.write("Click reload to calculate again.");
		document.write("<br><stong>Your answer:</strong> ")
		document.write(num1 / num2);
	}
}