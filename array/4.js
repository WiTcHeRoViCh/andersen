function last(arr, n){
  arr = arr || [];
  n = n || -1;

  if (n > 0) n *=-1
  return arr.slice(n)
}

