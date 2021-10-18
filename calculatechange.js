// This function named calculateChange takes in a total amount of a bill and the total cash given to pay that bill. 
// It returns a new object that describes the total amount of change for the cashier to give back.

const calculateChange = function(total, cash) {
  let totalChange = {};
  const billsNames = ['tewentyDollar', 'tenDollar', 'fiveDollar', 'twoDollar', 'oneDollar', 'quarter', 'dime', 'nickel', 'penny'];
  const billsValues = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];
  let change = cash - total;
   let remainder;
  for(let i = 0; i < billsValues.length; i++){
    remainder = change % billsValues[i];
    if(remainder === 0 || (remainder > 0 && remainder < change)){
      let numOfTimes = (change - remainder) / billsValues[i];
      totalChange[billsNames[i]] = numOfTimes;
      if(remainder === 0){
        break;
      }
      change -= (numOfTimes * billsValues[i]);
    }
  }
  return totalChange;
  
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));