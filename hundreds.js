function howManyHundreds(number){
  if (number < 100){
    return Math.trunc(number / 100);
  }else if (number === 100 || number === 1000 || number === 10000){
    return number / 100;
  }else if ((number / 100) > 1){
    return Math.trunc(number / 100);
  }else{
    return 0;
  }
}

console.log(howManyHundreds(1000), "=?", 10);
console.log(howManyHundreds(894), "=?", 8);
console.log(howManyHundreds(520), "=?", 5);
console.log(howManyHundreds(99), "=?", 0);
console.log(howManyHundreds(0), "=?", 0);
console.log(howManyHundreds(1234), "=?", 0);