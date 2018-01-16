function insert_dashes(){
  var num = +prompt("Write number",0);
  num = num.toString();
  var result = [num[0]]

  for (var i=1;i<num.length;i++) {
    if (num[i-1] % 2 === 0 && num[i] % 2 === 0){
      result.push("-", num[i])
    }
    else{
      result.push(num[i])
    }
  }
  return result.join("")
}

