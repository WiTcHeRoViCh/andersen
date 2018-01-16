function retrieveProperty(arr, property){
  for (var i = 0;i < arr.length;i++){
    if (arr[i].hasOwnProperty(property)){
      delete arr[i][property];
    }
  }
  return arr
}
