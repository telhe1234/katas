// This function returns the sum of the even or odd numbers depending on the condition
const conditionalSum = function(values, condition) {
  let total = 0;
  if(condition === 'even'){
    for(let num of values){
      if(num % 2 === 0){
        total += num;
      }
    }
  } else if(condition === 'odd'){
    for(let num of values){
      if(num % 3 === 0){
        total += num;
      }
    }
  }
  return total;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));