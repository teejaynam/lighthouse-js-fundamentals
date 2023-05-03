const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

const finalPosition = function (moves) {
  var x = 0;
  var y = 0;
  for (var i in moves){
    if (moves[i] === "north"){
      y++;
    }else if(moves[i] === "east"){
      x++;
    }else if(moves[i] === "south"){
      y--;
    }else if(moves[i] === "west"){
      x--;
    }
  }
  var position = [x,y];
  return position;
}


finalPosition(moves);