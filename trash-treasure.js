const smartGarbage = function (trash, bins) {
  var newBins = {
    waste : bins.waste,
    recycling : bins.recycling,
    compost : bins.compost
  }

  if ( trash === 'recycling'){
    newBins.recycling++;
  }else if ( trash === 'waste'){
    newBins.waste++;
  }else if ( trash === 'compost'){
    newBins.compost++;
  }else{
    return("Improper trash!")
  }

  console.log(newBins);
  //return newBins in the test
}

smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 });
smartGarbage('compost', { waste: 9, recycling: 9, compost: 9 });
smartGarbage('blah', { waste: 9, recycling: 9, compost: 9 });
