
// This function generateBoard returns a nested array representing the board, containing the location of two queens
const generateBoard = function(queen1, queen2) {
  let generatedBoard = [];
  let rowOfBoard = [];
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if((i === queen1[0] && j === queen1[1]) || (i === queen2[0] && j === queen2[1])){
        rowOfBoard.push(1);
      } else {
        rowOfBoard.push(0);
      }
    }
    generatedBoard.push(rowOfBoard);
    rowOfBoard = [];
  }
  return generatedBoard;
}

//  This function queenThreat indicates whether or not the two queens are positioned so that they attack each other.
const queenThreat = function(board) {
  [xa, ya, xb, yb] = getCoordinates(board);
  return xa === xb || ya === yb || Math.abs((yb - ya)/(xb - xa)) === 1;
}

// This function getCoordinates returns the coordinates of the two queens on the board, given the generated board array of arrays
const getCoordinates = function(board) {
  let coordinates = []
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      if(board[i][j] === 1) {
        coordinates.push(i, j);
      }
    }
  }
  return coordinates;
}

// let whiteQueen = [0, 5];
// let blackQueen = [5, 0];
// let generatedBoard = generateBoard(whiteQueen, blackQueen);
// console.log(generatedBoard);
// console.log(queenThreat(generatedBoard));

let whiteQueen = [0, 0];
let blackQueen = [5, 7];
// let whiteQueen = [2, 4];
// let blackQueen = [5, 1];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));