// This function camelCase converts a string to camel case, and returns the result.
const camelCase = function(input) {
  let newString = [...input];
  for(let i = 0; i < input.length; i++){
    if(input[i] === ' '){
      newString[i] = '';
      newString[i+1] = newString[i+1].toUpperCase();
    }
  }
  return newString.join('');
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));