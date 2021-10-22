// This function named blocksAway receives an array of directions, 
// and returns an object that calculates how far north and east those directions will take someone.

const blocksAway = function(directions) {
  let position = [0, 0]; // position[0] is x coordinate on the grid from the starting [0,0] position, position[1] is y coordinate on the grid from the starting [0,0] position
  let direction = '';
  for(let i = 0; i < directions.length; i += 2){
    if(position[0] === 0 && position[1] === 0){
      if(directions[i] === 'left'){
        // When turning left, since the taxi driver have to make a 90° counterclockwise 
        // and assuming the starting direction of the taxi is east, the driver will face the North as a result 
        direction = 'N';
        position[1] += directions[1];
      } else if(directions[i] === 'right') {
        // When turning right, since the taxi driver have to make a 90° clockwise 
        // and assuming the starting direction of the taxi is north, the driver will face the east as a result 
        direction = 'E';
        position[0] += directions[1];
      }
    } else {
      if(direction === 'N') {
        if(directions[i] === 'left'){
          direction = 'W';
          position[0] -= directions[i+1];
        } else if(directions[i] === 'right') {
          direction = 'E';
          position[0] += directions[i+1];
        }
      } else if(direction === 'E') {
        if(directions[i] === 'left'){
          direction = 'N';
          position[1] += directions[i+1];
        } else if(directions[i] === 'right') {
          direction = 'S';
          position[1] -= directions[i+1];
        }
      } else if(direction === 'S') {
        if(directions[i] === 'left'){
          direction = 'E';
          position[0] += directions[i+1];
        } else if(directions[i] === 'right') {
          direction = 'W';
          position[0] -= directions[i+1];
        }
      } else if(direction === 'W') {
        if(directions[i] === 'left'){
          direction = 'S';
          position[1] -= directions[i+1];
        } else if(directions[i] === 'right') {
          direction = 'N';
          position[1] += directions[i+1];
        }
      }
    }
  }
  return {east: position[0], north: position[1]};
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));