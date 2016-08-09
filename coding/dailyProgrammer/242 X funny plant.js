var people = 150000; //x
var globalSeeds = 250; //y
var weeklyProduction = 0;
var plants = [];
var currentWeek = 0;
var potNumber = 0;

var Plant = function(){
	globalSeeds--;
	potNumber++;
	this.age = 0;
	this.weeklySeeder = function(){
		this.age += 1;
		return this.age; //weekly production for this plant
	}
}

//plants[potNumber] = new Plant();

var checkWeekSeeds = function(){
	var thisWeekTotalProduction = 0;
	for(var i = 0; i < plants.length; i++) {
		thisWeekTotalProduction += plants[i].weeklySeeder();
	}
	return thisWeekTotalProduction;
}

while(weeklyProduction < people) {
	console.log("the week is now " + (currentWeek+1) +":"); 
	console.log("  number of plants: " + plants.length); 

	var weeklyProduction = checkWeekSeeds();
	globalSeeds +=weeklyProduction;

	console.log("  produced this week: " +weeklyProduction);

	while (weeklyProduction < people && globalSeeds > 0) {
		console.log('! planted pot number ' + (potNumber+1) +', seeds left: ' + globalSeeds);
		plants[potNumber] = new Plant();
	}
	
	if (weeklyProduction >= people) {
		console.log("---------------------");
		console.log("You can now feed " + people + " people within a week with a production of " + weeklyProduction + " fruits per week"); 
	}
	console.log("---------------------");
	currentWeek++;
	
}
