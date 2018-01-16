function swap_letters(){
  var string = prompt("Write string","");
  var letters = string.split("");
  var result = [];
  var char;

  for (i=0;i<letters.length;i++){
    char = letters[i]

    if (char === char.toUpperCase()){
      result[i] = char.toLowerCase();
    }
    else {
      result[i] = char.toUpperCase();
    }
  }
  alert(result.join(""))
}

