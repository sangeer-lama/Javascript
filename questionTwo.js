const input = [18, 76, 47, 46];
input.sort((a, b) => a - b);

input.reduce(
  (accumulator, currentValue, index, array) => {
    accumulator.mean += currentValue / array.length;

    if (array.length % 2 === 0) {
      if (index === array.length / 2 - 1) {
        accumulator.median += currentValue;
      } else if (index === array.length / 2) {
        accumulator.median += currentValue;
        accumulator.median /= 2;
      }
    } else {
      if (index === (array.length - 1) / 2) {
        accumulator.median = currentValue;
      }
    }

    return result=accumulator;
  },
  { mean: 0, median: 0 }

);
console.log(result);
