const input = "Sangeer Negi";
abbr = input
  .split(" ")
  .map((word) => word[0])
  .join("");
console.log(abbr);
