//console.log("Happy midterm after");
var moment = require('moment');
const chalk = require('chalk');

console.log(chalk.blue(moment().format('dddd')));
var greeting =  "Good " + GreetingTime(moment());
console.log(chalk.blue(greeting));
function GreetingTime (formatTime) {
	var time ;
	var afternoon = 12 
	var evening = 17
	var currentTime = parseFloat(formatTime.format("HH"));
	
	if(currentTime >= afternoon && currentTime <= evening) {
		time = "Afternoon";
	} else if(currentTime >= evening) {
		time = "Evening";
	} else {
		time = "Morning";
	}
	
	return time;
}
