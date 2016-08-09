// Detected time complexity: O(N**2) instead of O(N)

function solution(A) {
	var ret = 0;
	A = A.sort();
	while(A.length){
		var compared = A.shift();
		if(compared != A[0]){
			ret = compared;
		} else {
			A.shift();
		}
	}
		
	
	return ret;
}

var A = [];

A[0] = 9;
A[1] = 3;
A[2] = 9;
A[3] = 3;
A[4] = 9;
A[5] = 7;
A[6] = 9;

A = [5,5,4,4,3,3,2,2,6,6,8,8,3,3,25,25,7,7,6]

var result = solution(A);
console.log(result);