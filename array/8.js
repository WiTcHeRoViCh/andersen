function most_freq(arr) {
  var obj = {};
  var compare = 0, mostFreq = 0, cur;

  for (i = 0;i< arr.length;i++){
    cur = arr[i];

    if (obj[cur] === undefined){
      obj[cur] = 1;
    }
    else {
      obj[cur] +=1
    }
    if (obj[cur] > compare){
      compare = obj[cur];
      mostFreq = arr[i];
    }
  }
  return "Object "+mostFreq+" - "+ compare + " times"
}
