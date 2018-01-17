even = function even(num, i){
  i = i || 0;

  if (num == 0){
    return i%2 === 0 ? true : false;
  }
  else {
    return even(num-1, i+1)
  }
}