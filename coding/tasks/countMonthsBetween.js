/*

Write a program that, when given two months, outputs the number of months in between that contain five Sundays.
This is inclusive, for example given an input of “September 2013 December 2013”, your program should consider September, October, November and December 2013.
The dates will be provided as two pairs of months and years separated by spaces, per line, and the input may contain multiple lines.

*/

var fs=require('fs'),fn=process.argv[2],input;fs.readFile(fn,'utf8',function(err, data){

	var lines = data.split(/\r?\n/);
	
	for (var i = 0; i < lines.length; i++) {

		months(lines[i]);

	}

});

function months(i) {

	i = i.split(" ");

	var month = {
			'January':0,
			'Febuary':1,
			'March':2,
			'April':3,
			'May':4,
			'June':5,
			'July':6,
			'August':7,
			'September':8,
			'October':9,
			'November':10,
			'December':11
		},
		o = 0,
		begin = new Date(~~i[1], month[i[0]]),
		end = new Date(~~i[3], month[i[2]]),
		range = (end.getFullYear() - begin.getFullYear()) * 12 - begin.getMonth() + 1 + end.getMonth();

	for(var k = 0; k < range; k++) {

		var d = new Date(~~i[1], month[i[0]]+k).getDay(),
			dd = new Date(~~i[1], month[i[0]]+1+k,0).getDate();

		switch(dd) {
			case 31:
				if(d === 5 || d === 6 || d === 0)
					o++;
				break;
			case 30:
				if(d === 6 || d === 0)
					o++;
				break;
			case 29:
				if(d === 0)
					o++;
				break;
		};

	};

	console.log(o)
};