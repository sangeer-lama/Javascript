const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

const sumOfAges = ages.reduce((accumulator, currentAge) => accumulator + currentAge, 0);

console.log("The sum of all ages is:", sumOfAges);
