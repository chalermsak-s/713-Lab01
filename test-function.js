const checkNumber = (x, y) => {
  if (x > y) {
    return "x greater than y by " + (x - y);
  } else {
    return "y greater than x by " + (y - x);
  }
};

console.log(checkNumber(15, 10));
