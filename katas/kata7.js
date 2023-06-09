const checkAir = function (samples, threshold) {
  var pollutedCount = 0;

  for ( var i = 0 ; i < samples.length ; i++){
    if ( samples[i] === "dirty"){
      pollutedCount++;
    }
  }

  if ((pollutedCount/samples.length) >= threshold){
    return "Polluted"
  }

  return "Clean"
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))


console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty'],
  0.5
))
/*
Polluted
Polluted
Clean
*/