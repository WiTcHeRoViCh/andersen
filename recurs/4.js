sum_element = function sum_element(arr, i){
  i = i || 0;

  return (arr.length == i+1) ? arr[i] : arr[i]+sum_element(arr, i+1) 
}