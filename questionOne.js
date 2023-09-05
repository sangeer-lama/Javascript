const arr = [1, -4, 12, 0, -3, 29, -150];
let sum = 0;
if (arr.length !== 0) {
  arr
    .filter(function (num) {
      return num > 0;
    })
    .reduce(function (accumulator, currentValue) {
      return (sum = accumulator + currentValue);
    }, 0);
  if (sum != 0) {
    console.log(sum);
  } else {
    console.log("No positive number in array");
  }
}
else{
    console.log("array is empty!")
}
