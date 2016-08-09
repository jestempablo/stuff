var doors = [];
var doorsCreator = function(numberOfDoors){
	for(var i = 0; i < numberOfDoors; i++) {
		doors.push(false);
	}
}
doorsCreator(100);

//console.log(doors);

var doorsIterator = function(jump){
	if (jump == 0 || isNaN(jump)) {
		console.log("jump is 0 or not a number. resetting to 1")
		jump = 1;
	}
	
	for (var i = jump-1; i < doors.length; i = i+jump) {
		doors[i] = !doors[i];
	}
}

var doorsIteratorRunner = function(runs){
	for (var i = 1; i <= runs; i++) {
		doorsIterator(i)
	}
}

doorsIteratorRunner(100);

console.log(doors);
/* 
0 = closed
1 = open

0000000000
1111111111
1010101010
1000111000

first iter 1,2,3,4,5...
second: 2,4,6,8
third: 3,6,9

every iterator toggles the door

*/
