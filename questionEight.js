const isValidJSON = (obj) => {
  try {
    JSON.parse(obj);
    return true;
  } catch (e) {
    return false;
  }
};
console.log(isValidJSON('{"name":"ram","age":20}'));
console.log(isValidJSON('{"name":"shyam",age:"20"}'));
console.log(isValidJSON(null));
