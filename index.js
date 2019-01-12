// Code your solution in this file!

function distanceFromHqInBlocks(location){
  let distance;
  distance = Math.abs(location - 42);
  return distance;
}

function distanceFromHqInFeet(blocks) {
  let distance;
  distance = distanceFromHqInBlocks(blocks) * 264;
  return distance;
}

function distanceTravelledInFeet(start, end) {
  let distance;
  distance = Math.abs(start - end) * 264;
  return distance;
}

function calculatesFarePrice(start, end){
  let fare;
  let distance;
  distance = distanceTravelledInFeet(start, end);
  
  
  return fare;
}
