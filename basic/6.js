var current_year = new Date().getFullYear()
var day = new Date(current_year, 2, 0).getDate()

if (day == 29){
	console.log("Leap year")
}
else{
	console.log("no")
}
