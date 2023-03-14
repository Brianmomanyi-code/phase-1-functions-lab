// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
  const headquarters = 42; // The headquarters is located at 42nd street
  let distanceHq = Math.abs(blocks - headquarters);
  return distanceHq;
}
function distanceFromHqInFeet(feet) {
  const headquarters = 42;
  const feetPerBlock = 264;
  let distanceFeet = Math.abs(feet - headquarters);
  return distanceFeet * feetPerBlock;
}
function distanceTravelledInFeet(block1, block2) {
  const feetPerBlock = 264; // Each block is equivalent to 264 feet
  const blocksTravelled = Math.abs(block1 - block2); // Calculate the absolute difference between the starting and ending blocks
  return blocksTravelled * feetPerBlock; // Multiply the number of blocks by the feet per block to get the total distance travelled in feet
}
function calculatesFarePrice(start, destination) {
  const distance = Math.abs(destination - start) * 264;
  let farePrice = 0;

  if (distance <= 400) {
    farePrice = 0;
  } else if (distance > 400 && distance <= 2000) {
    farePrice = 0.02 * (distance - 400);
  } else if (distance > 2000  && distance <= 2500) {
    farePrice = 25;
  } else {
    farePrice = 'cannot travel that far';
  }

  return farePrice;
}







