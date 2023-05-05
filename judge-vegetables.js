const metric = 'redness'

const judgeVegetable = function (vegetables, metric) {
  var winner = "";
  var highScore = 0;

  vegetables.forEach(function(entry){
    if (entry[metric] >= highScore){
      highScore = entry[metric];
      winner = entry.submitter;
    }
  });

  return winner;
}


const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 11,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

console.log(judgeVegetable(vegetables, metric))

  /*var keys = Object.keys(vegetables);
  
  for (index in keys){
    if (keys[index] !== metric){
      return ("error")*/