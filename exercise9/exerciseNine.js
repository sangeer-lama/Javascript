function combineArguments(...args) {
  const resultArray = [];

  args.forEach((arg) => {
    if (Array.isArray(arg)) {
      resultArray.push(...arg);
    } else {
      resultArray.push(arg);
    }
  });

  return resultArray;
}

const combined = combineArguments(1, "Hello", [2, 3], "World", [4, 5]);
console.log(combined);
