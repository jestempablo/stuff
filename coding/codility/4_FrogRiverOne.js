function solution(X,A) {
	var river = new Array(X), count = 0,tick = 0;
	for(var i = 0; i<A.length;i++){
		if(river[A[i]-1] != true) {
			river[A[i]-1] = true;
			count++;
			if(count == X){
				return tick;
			}
		}
		tick++;
	}
	return -1;
}

var X = 5,A = [];

  A[0] = 1;
  A[1] = 3;
  A[2] = 1;
  A[3] = 4;
  A[4] = 2;
  A[5] = 3;
  A[6] = 5;
  A[7] = 4;

var result = solution(X,A);
console.log(result);