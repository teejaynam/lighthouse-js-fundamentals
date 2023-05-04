/*
The function should return an empty array [] if given incorrect parameters, such as:

start, end, or step being undefined
start being greater than end
step being 0, or negative
*/
function range(start, end, step){
  var rangeArray = [];
  if (start === undefined || end === undefined || step === undefined) {
    return rangeArray;
  }
  if (start > end){
    return rangeArray;
  }
  if (step <= 0){
    return rangeArray;
  }

  rangeArray.splice(1,0,start);  

  var i = 1;
  while ( rangeArray[rangeArray.length - 1 ] + step <= end ){
    rangeArray.splice(i,0,(start + (step * i)))
    i++;
  }

  return rangeArray;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));