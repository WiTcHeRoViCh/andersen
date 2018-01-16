var current_time = new Date;
console.log("Today is: "+current_time.toLocaleString("en-Us", {weekday:'long'}));
console.log("Current Time: " + current_time.toLocaleString('en-US', { hour: 'numeric', hour12: true}) + " "
	+current_time.toLocaleString('en-US', { minute: 'numeric', second: 'numeric'}))

