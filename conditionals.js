const temperature = -44;
const raining = "false"
let rainCondition = ""

if (!raining) {
  rainCondition = "Leave your umbrella at home!"
}else{
  rainCondition = "Take your umbrella!"
}

if (temperature < 0 && temperature > -40) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15 && temperature > 0) {
  console.log("Short sleeves won't cut it!");
} else if (temperature < -40 || temperature > 40){
  console.log("Maybe going outside isn't such a great idea…");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!" + "\n" +rainCondition);