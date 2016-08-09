// performance 88
function solution(N,A) {
	var arr = new Array(N).fill(0);
	var max = 0;
	for(var i = 0; i<A.length;i++) {
		if(A[i]-1<arr.length){
			arr[A[i]-1]++;
			if(max < arr[A[i]-1]){
				max = arr[A[i]-1];
			}
		} else {
			for(var j = 0; j<arr.length;j++) {
				arr[j] = max;
			}
		}
	}

	return arr;
}

N = 5;

A = [];

    A[0] = 3;
    A[1] = 4;
    A[2] = 4;
    A[3] = 6;
    A[4] = 1;
    A[5] = 4;
    A[6] = 4;

var result = solution(N,A);
console.log(result);