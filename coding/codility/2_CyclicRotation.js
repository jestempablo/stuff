// case: empty -- Invalid result type, integer expected, 'undefined' found

function solution(A,K) {
	for (var i = 0; i < K; i++){
		var moved = A.pop();
		A.unshift(moved);
	}
	return A;
}

var A = [3, 8, 9, 7, 6];
var K = 3;

var result = solution(A,K);
console.log(result);