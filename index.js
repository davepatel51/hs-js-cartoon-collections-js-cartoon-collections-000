function dwarfRollCall(dwarves) {
}

function summonCaptainPlanet(planeteerCalls){
}

function longPlaneteerCalls(words) {
}

function findTheCheese (foods) {
}

function summonCaptainPlanet(planeteerCalls){
return planeteerCalls.map(x=>x.toUpperCase()+"!")
}

function longPlaneteerCalls(wordsize){
  for(var x=0;x<wordsize.length;x++){
    if (wordsize[x].length>4){
      return true
    }
  }
  return false
}




function dwarfRollCall(dwarves) {
  var DRF= [];
  dwarves.forEach(function(name, x) {
  	DRF += (x+1 + ". " + name+ " ");
  });
  return DRF;
}

function findTheCheese (cheese) {
  for(var x=0;i<cheese.length;x++){
  if (cheese[x]=="cheddar"
  ||cheese[x]=="gouda"
  ||cheese[x]=="camembert"
  ){
    return cheese[x]
  }
}
return "no cheese!"
}

  