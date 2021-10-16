// This function named talkingCalendar takes in a date string with the format YYYY/MM/DD, 
// and returns a new human readable date that looks like December 2nd, 2017.

const talkingCalendar = function(date) {
  const months = ["Undefined", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const numberedDateArr = date.split('/');
  const month = months[Number(numberedDateArr[1])];
  const day = Number(numberedDateArr[2]);
  const year = numberedDateArr[0];

  // switch (numberedDateArr[1]) {
  //   case '01':
  //     month += months[0];
  //     break;
  //   case '02':
  //     month += months[1];
  //     break;
  //   case '03':
  //     month += months[2];
  //     break;
  //   case '04':
  //     month += months[3];
  //     break;
  //   case '05':
  //     month += months[4];
  //     break;
  //   case '06':
  //     month += months[5];
  //     break;
  //   case '07':
  //     month += months[6];
  //     break;
  //   case '08':
  //     month += months[7];
  //     break;
  //   case '09':
  //     month += months[8];
  //     break;
  //   case '10':
  //     month += months[9];
  //     break;
  //   case '11':
  //     month += months[10];
  //     break;
  //   case '12':
  //     month += months[11];
  //     break;
  // }
  let suffix = '' ;
  switch(day) {
    case 1:
    case 21:
    case 31:
      suffix += 'st';
      break;
    case 2:
    case 22:
      suffix += 'nd';
      break;
    case 3:
    case 23:
      suffix += 'rd';
      break;
    default:
      suffix += 'th';
  }

  return month + ' ' + day + suffix + ', ' + year;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));