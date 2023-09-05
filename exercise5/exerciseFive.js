const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
const sortedAges = ages.sort(function (a, b) {
  return b - a;
});

console.log(sortedAges);
