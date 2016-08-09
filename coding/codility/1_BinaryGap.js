function solution(N) {
    var val = N.toString(2);
    var count = 0,max = 0;
    val = val.split('');
    for(var num in val){
    	if (val[num] == 0){
    		count++;
    	} else {
    		if(max<count)
    			max = count;
    		count = 0;
    	}
    }
    return max;
}

var N = 2147483647;
var result = solution(N);
console.log(result);