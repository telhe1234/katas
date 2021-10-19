//  This function named urlDecode receives a URL encoded string, 
// and returns the a JavaScript object that represents that data.

const urlDecode = function(text) {
  let urlDecodedObj = {}
  const dataArr = text.split('&');
  for(let data of dataArr) {
    let keyValuesArr = data.split('=');
    const searchRegExp = /%20/gi;
    let newValue = keyValuesArr[1].replace(searchRegExp, ' ');
    urlDecodedObj[keyValuesArr[0]] = newValue;
  }
  return urlDecodedObj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);