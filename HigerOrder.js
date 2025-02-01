const n = [1, 2, 3, 4, 5];
const even = n.filter((num) => num % 3 === 0);
const square3 = even.map((num) => num * num * num);
console.log(square3);
