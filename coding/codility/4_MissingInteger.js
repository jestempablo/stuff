function solution(A) {

	function sortNumber(a,b) {
	    return a - b;
	}

	A.sort(sortNumber);

	var find = 1;

	for(var i = 0; i<A.length;i++) {
		if(A[i] == find){
			find++;
		}
	}

	return find;

}

A = [];

  A[0] = 1;
  A[1] = 3;
  A[2] = 6;
  A[3] = 4;
  A[4] = 1;
  A[5] = 2;
  A[6] = 5;
  A[7] = 7;
  A[8] = 8;
  A[9] = 3;
  A[10] = 8;
  A[11] = 9;
  A[12] = 10;
  A[13] = 11;
  A[14] = 12;
  A[15] = 13;
  A[16] = 14;
  A[17] = 14;
  A[18] = 16;
  A[19] = 10000000;

var result = solution(A);
console.log(result);