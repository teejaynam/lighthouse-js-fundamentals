const sumLargestNumbers = function(data) {
  var firstNum = 0;
  var secondNum = 0;

  for (var i = 0 ; i < data.length ; i++){
    if (data[i] === firstNum){
      firstNum = data[i];
    }else if ( data[i] > firstNum){
      secondNum = firstNum;
      firstNum = data[i];
    }else if ( data[i] > secondNum || firstNum === secondNum){
      secondNum = data[i];
    }
  }
  return firstNum + secondNum;
};

console.log(sumLargestNumbers([1, 10])); //11
console.log(sumLargestNumbers([1, 2, 3])); //5
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2])); //126
