// This function named squareCode receives a message, and returns the secret square code version of the message
const squareCode = function(message) {
  let messageCopy = message;
  let cleanedMessageArr = [...messageCopy.replace(/\s/g, '')];
  const cleanedMessageLength = cleanedMessageArr.length;
  const columnsNum =  Math.ceil(Math.sqrt(cleanedMessageLength));
  let squareTable = [];

  for (let i=0; i< cleanedMessageLength; i+=columnsNum) {
    squareTable.push(cleanedMessageArr.slice(i,i+columnsNum));
  }
  return readFromTopDown(squareTable, columnsNum).join(' ');
}

function readFromTopDown(square, columnsNum) { 
  let coded = [];
  for(let i = 0; i < columnsNum; i++){   
      var textMain = "";     
      square.forEach(re => {
          textMain += re.join('').substring(i, i+1);
      });
      coded.push(textMain);
  }
  return coded;
}

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));