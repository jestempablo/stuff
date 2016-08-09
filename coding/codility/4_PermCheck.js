function solution(A) {

	function sortNumber(a,b) {
	    return a - b;
	}

	A.sort(sortNumber);

	for(var i = 0; i<A.length;i++) {
		if(i+1 != A[i]){
			return 0;
		}
	}

	return 1;

}

A = [];

    A[0] = 4;
    A[1] = 1;
    A[2] = 3;
    A[3] = 2;

var result = solution(A);
console.log(result);