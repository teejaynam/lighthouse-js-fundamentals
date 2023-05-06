const instructorWithLongestName = function(instructors) {
  var longestNameIndex = 0;
  var longestName = "";

  for ( var i = 0 ; i < instructors.length ; i++){
    if (instructors[i].name.length > longestName.length){
      longestNameIndex = i;
      longestName = instructors[i].name;
    }
  }
  return instructors[longestNameIndex];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
])); //jeremiah

console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"},
  {name: "SuperduperWolfMan", course: "iOS"},
  {name: "DuperSuperMolfWan", course: "iOS"}
])); //domascus
