const director = "Steven Spielberg";
const film1 = "Jaws";
const film2 = "Raiders of the Lost Ark";
const film3 = "A.I";

const films = [film1,film2,film3];

for ( var i = 0 ; i < films.length; i++){
  console.log("films at index " + i + " " + films[i])
}

var filmsExample = ["Jumanji", "Crazy", "Pig"];
filmsExample[2] = "Jurrasic Park";
console.log(filmsExample);
filmsExample.push("A.I");
console.log(filmsExample);