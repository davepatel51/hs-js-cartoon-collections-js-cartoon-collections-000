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
  for(var i=0;i<wordsize.length;i++){
    if (wordsize[i].length>4){
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
  for(var x=0;i<cheese.length;i++){
  if (cheese[i]=="cheddar"
  ||cheese[i]=="gouda"
  ||cheese[i]=="camembert"
  ){
    return cheese[i]
  }
}
return "no cheese!"
}

  