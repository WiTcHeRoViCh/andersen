function leap_year(start, end){
  start = start || 0;
  end = end || 0;
  var date;
  var result = [];

  if (start-end > 0) return "Unvalid numbers!";

  for (var i = start; i <= end; i++){
    date = new Date(i, 2);

    if (date.getUTCDate() == 29) {
      result.push(date);
    }
  }
  return result;
}
