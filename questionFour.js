const input = [
  { name: "John", age: 13 },
  { name: "Mark", age: 56 },
  { name: "Rachel", age: 45 },
  { name: "Nate", age: 67 },
  { name: "Jeniffer", age: 65 },
];
const ages = input.map((person) => person.age);

agediff = [
  Math.min(...ages),
  Math.max(...ages),
  Math.max(...ages) - Math.min(...ages),
];
console.log("Youngest age: ", agediff[0]);
console.log("Oldest age: ", agediff[1]);
console.log("Age difference between Youngest and oldest: ", agediff[2]);
