// This function urlEncode receives a string of words, 
// and return that string with all of the whitespace characters converted to %20. 
// If there is whitespace on the outside of the string it discards them.

const urlEncode = function(text) {
  let newText = [];
  for(let i = 0; i < text.length; i++){
    if(text[i] === ' ' && i !== 0 && i !== (text.length - 1)){
      newText.push('%20');
    } else if(text[i] !== ' '){
      newText.push(text[i]);
    }
  }
  return newText.join('');
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));