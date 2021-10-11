// This function numberOfVowels receives a string 
// and returns the number of vowels in that string
const numberOfVowels = function(data) {
  let vowelsCount = 0;
  for(let letter of data){
    if(letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
      vowelsCount += 1;
    }
  }
  return vowelsCount;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));