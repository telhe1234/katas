// This function named multiplicationTable receives a number maxValue as input 
// and creates a square multiplication table where maxValue is the largest value in the table.

const multiplicationTable = function(maxValue) {
  let result = [];
  let intermResult = [];
  for(let i = 1; i <= maxValue; i++){
    for(let j = 1; j <= maxValue; j++){
      intermResult.push(i * j);
    }
    result.push(intermResult.join(' '));
    intermResult = [];
  }
  return result.join('\n') + '\n';

};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));