// Code your solution in this file!
let blockNumber = 43;
blockNumber = 50;
blockNumber = 34;
function distanceFromHqInBlocks(blockNumber) {
    const hqBlock = 42;
  return Math.abs(blockNumber - hqBlock);
  }
  function distanceFromHqInFeet(blockNumber) {
    const blockLength = 264;
    return distanceFromHqInBlocks(blockNumber) * blockLength;
  }
  function distanceTravelledInFeet(startBlock, endBlock) {
    const blockLength = 264;
    return Math.abs(startBlock - endBlock) * blockLength;
  }
  function calculatesFarePrice(startBlock, endBlock) {
    const distance = distanceTravelledInFeet(startBlock, endBlock);
    if (distance <= 400) {
      return 0;
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }