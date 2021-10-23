let prompt = require("prompt-sync")();

// code below (replace this example)
const numberGesser = function (){
  const randomNumber = getRandomInt();
  let counter = 0;
  
  console.log(randomNumber);
  console.log("Guess a number:");
  let answer = prompt('> ', '');
  
  if(isNaN(answer) || answer === ''){
    console.log('Not a number! Try again!');
  } else if(Number(answer) < randomNumber) {
    console.log('Too Low!')
    counter++;
  } else if(Number(answer) > randomNumber) {
    console.log('Too High!')
    counter++;
  } else {
    counter++;
  }
  
  let previousAnswer = answer;
  while((Number(answer) - randomNumber) !== 0) { // check if the answer is not equal to the randomly generated number, if so execute the while loop. The while loop breaks when this condition is false or the two number are equal
    console.log("Guess a number:")
    answer = prompt('> ', '');
    if(answer === '' || isNaN(answer)) {  // check if the answer is not a number or if the answer is an empty string, if so print 'Not a number! Try again!'
      console.log('Not a number! Try again!');
    } else if(previousAnswer === answer) {  // check if the asnwer is equal to the previousAnswer, if so print 'Already Guessed!'
      console.log('Already Guessed!');
    } else if(Number(answer) < randomNumber) {
      console.log('Too Low!')
      counter++;
    } else if(Number(answer) > randomNumber) {
      console.log('Too High!')
      counter++;
    } else {
      counter++;
    }
    previousAnswer = answer;
    // console.log(checkAnswer(previousAnswer, answer));
  }
  return 'You got it! You took ' + counter + ' attempts!'; 
}
// const checkAnswer = (previousAnswer, answer) => {
//   if(previousAnswer === Number(answer)) {
//     console.log('Already Guessed!');
//   } else if(isNaN(answer) || answer === '') {
//     console.log('Not a number! Try again!');
//   } else {
//     counter++;
//   }
// }
const getRandomInt = () => {
  return Math.floor(Math.random() * 100);
}

console.log(numberGesser());
