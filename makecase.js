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
const pascalCase = function(input) {
  let newString = [...input];
  for(let i = 0; i < input.length; i++){
    if(i === 0) {
      newString[i] = newString[i].toUpperCase();
    }
    if(input[i] === ' '){
      newString[i] = '';
      newString[i+1] = newString[i+1].toUpperCase();
    }
  }
  return newString.join('');
};

const snakeCase = function(input) {
  let newString = [...input];
  for(let i = 0; i < input.length; i++){
    if(input[i] === ' '){
      newString[i] = '_';
    }
  }
  return newString.join('');
};
const kebabCase = function(input) {
  let newString = [...input];
  for(let i = 0; i < input.length; i++){
    if(input[i] === ' '){
      newString[i] = '-';
    }
  }
  return newString.join('');
};

const titleCase = function(input) {
  let newString = [...input];
  for(let i = 0; i < input.length; i++){
    if(i === 0) {
      newString[i] = newString[i].toUpperCase();
    }
    if(input[i] === ' '){
      newString[i+1] = newString[i+1].toUpperCase();
    }
  }
  return newString.join('');
};

const vowelCase = function(input) {
  let newString = [...input];
  for(let i = 0; i < input.length; i++){
    if(newString[i] === "a" || newString[i] === "e" || newString[i] === "i" || newString[i] === "o" || newString[i] === "u"){
      newString[i] = newString[i].toUpperCase();
    }
  }
  return newString.join('');
};

const consonantCase = function(input) {
  let newString = [...input];
  for(let i = 0; i < input.length; i++){
    if(newString[i] !== "a" && newString[i] !== "e" && newString[i] !== "i" && newString[i] !== "o" && newString[i] !== "u"){
      newString[i] = newString[i].toUpperCase();
    }
  }
  return newString.join('');
};

const upperCase = function(input) {
  return input.toUpperCase();
}

const lowerCase = function(input) {
  return input.toLowerCase();
}
const makeCase = function(input, caseStyle) {
  let caseInput = input;
  const priority = {high: ['camel', 'pascal', 'snake', 'kebab', 'title'], 
    medium: ['vowel', 'consonant'], 
    low: ['upper', 'lower']
  };
  Array.isArray(caseStyle) === true ? caseStyle = caseStyle : caseStyle = [caseStyle];
  let hierarchy = {high: [], medium: [], low: []}; 
  for(let c of caseStyle){
    if(priority.high.includes(c)){
      hierarchy.high.push(c);
    } else if(priority.medium.includes(c)){
      hierarchy.medium.push(c);
    } else if (priority.low.includes(c)){
      hierarchy.low.push(c);
    }
  }
  for(let h in hierarchy){
    hierarchy[h].forEach(element => {
      switch (element) {
        case 'camel':
          caseInput = camelCase(caseInput);
          break;
        case 'pascal':
          caseInput = pascalCase(caseInput);
          break;
        case 'snake':
          caseInput = snakeCase(caseInput);
          break;
        case 'kebab':
          caseInput = kebabCase(caseInput);
          break;
        case 'title':
          caseInput = titleCase(caseInput);
          break;
        case 'vowel':
          caseInput = vowelCase(caseInput);
          break;
        case 'consonant':
          caseInput = consonantCase(caseInput);
          break;
        case 'upper':
          caseInput = upperCase(caseInput);
          break;
        case 'lower':
          caseInput = lowerCase(caseInput);
          break;
      }
    });
  }
    return caseInput;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));