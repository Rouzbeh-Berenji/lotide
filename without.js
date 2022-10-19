const without = function(source, toRemove) {
  let arr = source;
  for (i=0 ; i < source.length; i++){
    for(j=0 ; j < toRemove.length; j++){
      if (source[i] === toRemove[j]) {
        arr.splice(i, 1);
      }
    }
  }
  return arr;
}

console.log(without(["1", "2", "3"], [1, "2", "3"]) );