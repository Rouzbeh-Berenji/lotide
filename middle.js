const middle = function (A) {
  if (A.length % 2 !== 0) {
    let middleItem = (A.length+1)/2
    return A[middleItem-1]
  }
  else {
  let middleItems = A.length/2
return A.splice((middleItems-1), 2)
  }
}
console.log (middle([2,5,'e,t,y,',6,8]))