//  The totalVolume() function receives an array containing the different shapes that make up a single attraction. 
// The totalVolume function should use the three provided functions to calculate the total volume of an attraction.


// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  return (4 * PI * (radius ** 3))/3;
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  return (PI * (radius ** 2) * height)/3;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  return depth * width * height;
}
console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let volume = 0; 
  for(let shape of duck){
    if(shape.type === 'sphere'){
      volume += sphereVolume(shape.radius);
    } else if (shape.type === cone){
      volume += coneVolume(shape.radius, shape.height);
    } else if (shape.type === 'prism'){
      volume += prismVolume(shape.height, shape.width, shape.depth);
    }
  }
  return volume;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);