const numberOfVowels = function(data) {
  const vowels = ["a","e","i","o","u"];
  let count = 0;

  for (var i = 0 ; i < data.length ; i++){
    if (vowels.includes(data[i])){
      count++;
    }
  }

  return count;
};

console.log(numberOfVowels("orange"));//3
console.log(numberOfVowels("lighthouse labs"));//5
console.log(numberOfVowels("aeiou"));//5