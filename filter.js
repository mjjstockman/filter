  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */

// FILTER METHOD ALWAYS RETURNS AN ARRAY!!!!!!

// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

// call the filter method on the people array and pass it a callback function.  
// filter the array by using filter method on the array to return all over 21,
// takes person as the param and returns their age if over 21
const oldEnough = people.filter(person => person.age >= 21);
// console.log(oldEnough);


//  find the objects in an array of objects that contain a specific property. 
// eg.  get paul out of the array of people above?

// make new var named paul which filters the array people to those with first name 'Paul'
const paul = people.filter(person => person.name === 'Paul');
// returns an array of the paul object
// console.log(paul);
// if want paul obj, add [0]
const paulObj = people.filter(person => person.name === 'Paul')[0];
// console.log(paulObj);


// shorten further by using p for person in the call back
const paulShort = people.filter(p => p.name === 'Paul');
// console.log(paulShort);


// fliltering can get complex, so often put the callback function (the part...
// that does the actual filtering) defined outside the call to the filter method

// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];


// want only those with at least 5 years experience in a skill set
// (naming those with over 5 yrs stongSkills)

// previous way

const candidates1 = students.filter(student => {
  let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
  //  filter always returns an array, even if empty
  // so there will be an array for Ariel, but will be empty as no stong skills.
  return strongSkills.length > 0;
})

console.log(candidates1);

// BETTER WAY: if have complext callback
//  extract the callback into it's own finction
// ie. take what was in parentheses and asign it to a var.  Isolates the callback
//  function making it cleaner and reusable.
// COULD ALSO DO SAME FOR "skill => skill.yrsExperience >= 5"

const hasStrongSkills1 = student => {
  let strongSkills = student.skills.filter(skill => skill.yrsExperience >= 5);
  return strongSkills.length > 0;
}
const candidatesBetter = students.filter(hasStrongSkills1);
console.log(candidatesBetter);

// COULD ALSO DO SAME FOR "skill => skill.yrsExperience >= 5"
const has5yearsExp = skill => skill.yrsExperience >= 5;
const hasStrongSkills = student => student.skills.filter(has5yearsExp).length > 0;
const candidates = students.filter(hasStrongSkills);
console.log(candidates);

// use map to show just names
const names = candidates.map(student => student.name);
console.log(names);

let students = [
  {
      name: 'John',
      subjects: ['maths', 'english', 'cad'],
      teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
      results: {maths: 90, english: 75, cad: 87},
  },
  {
      name: 'Emily',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 93, english: 80, art: 95},
  },
  {
      name: 'Adam',
      subjects: ['science', 'maths', 'art'],
      teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
      results: {science: 84, maths: 97, art: 95},
  },
  {
      name: 'Fran',
      subjects: ['science', 'english', 'art'],
      teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
      results: {science: 67, english: 87, art: 95},
  }
];

const topMaths = students.filter(student => student.results.maths >= 90);
console.log(topMaths);





