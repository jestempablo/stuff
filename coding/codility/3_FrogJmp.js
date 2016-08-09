function solution(X,Y,D) {
	return Math.ceil((Y-X)/D);
}

var X = 10,
Y = 85,
D = 30;

var result = solution(X,Y,D);
console.log(result);