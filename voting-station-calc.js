const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

const chooseStations = function (stations) {
  var validStations = [];
  for (var i = 0; i < stations.length; i++){
    if ((stations[i][1] >= 20) && (stations[i][2] === "community centre" || stations[i][2] === "school")){
        validStations.push(stations[i][0]);
    }
  }
  console.log(validStations)
  //return the array in the evaluation
}

chooseStations(stations);