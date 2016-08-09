var numbers = "";

var generator = function(){
	while(numbers.length < 4) {
		var temp = Math.floor(Math.random()*10);
		if (temp != 0)
			numbers += temp;
	}
}
generator();
console.log(numbers);

var operation = prompt("enter the operation");
if (eval(operation) == 24) {
	console.log("well done!");
} else {
	console.log("wrong! " + operation + " is not 24");
}