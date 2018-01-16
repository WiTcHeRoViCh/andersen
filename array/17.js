function shuffleArray(array){
  for ( var i = 0; i < array.length;i++){
    var rand_index = Math.floor(Math.random() * array.length);
    var current_elem = array[i];
    array[i] = array[rand_index];
    array[rand_index] = current_elem;
  }
  return array;
}

