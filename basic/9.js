var current_time = new Date();
var current_year = current_time.getFullYear();
var next_christmas = new Date(current_year, 11, 26);
var day_to_christmas = (( next_christmas - current_time )/3600000)/24;

console.log(day_to_christmas)
