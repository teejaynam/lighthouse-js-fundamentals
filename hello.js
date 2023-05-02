const sayHello = function(name){
  console.log("Hello, world and " + name)
}

/*
sayHello("Jeffery");
sayHello("Johnson");
sayHello("Jeremy");
*/

const sayHelloToConsole = function(name){
  console.log("HELLO " + name);
}

const returnSayHello = function(name){
  return "hello " + name;
}

sayHelloToConsole("Connor");
const greeting = returnSayHello("Ryan");
console.log(greeting);