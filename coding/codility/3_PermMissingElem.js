//CORRECT 8/10 empty_and_single 

function solution(A) {

	var retval;
	
	//A.sort();

	function sum(tot,curr) {
		return tot + curr;
	}


	var toti = 0;

	for(var i = 1; i<A.length+2;i++) {
		toti += i;
		//console.log(toti)
	}

	var tota = A.reduce(sum);

	//console.log(tota, toti)

	retval = toti - A.reduce(sum)

	return retval;

}

var A = [];

  A[0] = 2;
  A[1] = 3;
  A[2] = 1;
  A[3] = 5;

  //A = [1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18]

var result = solution(A);
console.log(result);