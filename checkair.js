// This function must return Polluted if there are too many dirty air samples, 
// or Clean if the proportion of dirty samples is below the threshold.
// The function will take in two arguments. 
// The first argument is an array of strings, where each string represents a small air sample that is either clean or dirty. 
// The second argument is a number representing the highest acceptable amount of dirty samples.
const checkAir = function (samples, threshold) {
  let dirtyCount = 0;
  for(let sample of samples){
    if(sample === 'dirty'){
      dirtyCount++;
    }
  }
  if((dirtyCount/samples.length) < threshold){
    return 'Clean';
  } else {
    return 'Polluted';
  }
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
))