// This function instructorWithLongestName receives an array of instructor objects, 
// and returns the object that has the longest name.
const instructorWithLongestName = function(instructors) {
  let longest = [0,  {}];
  for(let instructor of instructors){
    if(instructor.name.length > longest[0]){
      longest[0] = instructor.name.length;
      longest[1] = instructor;
    }
  }
  return longest[1];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));