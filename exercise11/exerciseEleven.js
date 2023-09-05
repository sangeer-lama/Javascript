function createIncrementer() {
  let currentValue = 0;

  return function () {
    return currentValue++;
  };
}

const incrementNumber = createIncrementer();

console.log(incrementNumber());
console.log(incrementNumber());
console.log(incrementNumber());
