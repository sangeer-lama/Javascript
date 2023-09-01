function sumNumbers(...numbers) {
  let total = 0;
  for (let number of numbers) {
    if (typeof number === "number") {
      total += number;
    }
  }
  return total;
}

console.log(sumNumbers(1, 2, 3, 4, 5));
console.log(sumNumbers(10, 20, 30));
console.log(sumNumbers(5, 10, 15, 20,15,789,45,7,1,2,3,4,5,6,7,8,9));
