// This function repeatNumbers will return a string with each of the given values 
// repeated the appropriate number of times, if there are multiple sets of values 
// each set should be separated by a comma.

const repeatNumbers = function(data) {
  let repeatedNumber = '';
  for(let i = 0; i < data.length; i++){
    if(i > 0 ) repeatedNumber += ', ';
    for(let j = 1; j <= data[i][1]; j++){
      repeatedNumber += data[i][0];
    }
  }
  return repeatedNumber;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));