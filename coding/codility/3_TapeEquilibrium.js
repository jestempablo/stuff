// Detected time complexity: O(N*N) performance 0%
// double input error

function solution(A) {

	var retval = Infinity;
	function sum(tot,curr){
		return tot + curr;
	}

	for(var i = 1; i < A.length-1; i++){
		var tmp
		var left = A.slice(0,i).reduce(sum);
		var right = A.slice(i,A.length).reduce(sum);
		var diff = Math.abs(left - right);
		if (diff < retval)
			retval = diff;
	}
	return retval;

}

var A = [];

  A[0] = 3;
  A[1] = 1;
  A[2] = 2;
  A[3] = 4;
  A[4] = 3;

var result = solution(A);
console.log(result);