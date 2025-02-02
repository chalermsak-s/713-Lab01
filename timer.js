const waitAndPrint = () => {
  let count = 1;
  setInterval(() => {
    console.log(`hello${" world".repeat(count)}`);
    count++;
  }, 3000);
};
waitAndPrint();
