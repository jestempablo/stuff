// ŹLE W CHUJ!!
function solution(A,B,K) {

	return Math.ceil(B/K-A/K);
}

A = 6;
B = 11;
K = 2;

A = 11;
B = 345;
K = 17;

A = 0;
B = 1;
K = 11;

var result = solution(A,B,K);
console.log(result);