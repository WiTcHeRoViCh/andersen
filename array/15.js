function display_color(){
  var o = ["th","st","nd","rd"];
  var color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
  
  for (var i = 0;i < color.length; i++){
    var ordinal = i + 1;
    var print_color = ordinal+(o[(ordinal-20)%10]||o[ordinal]||o[0]) + " choice is "+color[i];
    
    console.log(print_color);
  }
}
