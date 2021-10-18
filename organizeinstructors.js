const organizeInstructors = function(instructors) {
  let organizedInstructorsObj = {};
  
  // Add the courses to the courses array and 
  // add the insructor names to the names array.
  let courses = [];
  let names = [];
  for(let instructor of instructors){
    courses.push(instructor.course);
    names.push(instructor.name);
  }
  // Add intructors names to an array names namesArr if the name corresponds to the same course we're processing
  // and assign the key instructor.course the value of namesArr
  for(let instructor of instructors){
    let namesArr = [];
    for(let i = 0; i < courses.length; i++){
      if(courses[i] == instructor.course){
        namesArr.push(names[i]);
      }
    }
    organizedInstructorsObj[instructor.course] = namesArr;
    namesArr = [];
  }
  return organizedInstructorsObj;
}

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));