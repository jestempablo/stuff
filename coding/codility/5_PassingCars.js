// performance 20%

function solution(A) {

	if(A.length>1000000000)
		return -1;

	var left =0;
	var right =0;

	var result =0;

	for(var i = 0; i<A.length;i++) {
		if(A[i]==0){
			for(var j = i; j<A.length;j++) {
				if(A[j]==1){
					result++;
				}
			}
		}
	}

	return result;
}

A = [];

  A[0] = 0;
  A[1] = 1;
  A[2] = 0;
  A[3] = 1;
  A[4] = 1;
// (0, 1), (0, 3), (0, 4), (2, 3), (2, 4).
var result = solution(A);
console.log(result);