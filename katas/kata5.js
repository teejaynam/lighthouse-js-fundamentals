
const urlEncode = function(text) {
  var newText = text.split("");

  if ((newText[0] === " ") && (newText[newText.length - 1 ] === " ")){
    newText.shift();
    newText.pop();
  }

  for (var i = 0; i < newText.length; i++){
    if ( newText[i] === " "){
      newText.splice(i,1,"%20");
    }
  }

  newText = newText.join('');
  return newText;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));

/*
Lighthouse%20Labs
Lighthouse%20Labs
blue%20is%20greener%20than%20purple%20for%20sure
*/