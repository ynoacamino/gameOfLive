const createArrays = (num) => {
  const elArray = [];
  for (let i = 0; i < num; i += 1) {
    elArray.push(Array(num).fill(0));
  }
  return (elArray);
};

const law = (arr, x, y, status) => {
  if (x === 0 || y === 0 || x === arr.length - 1 || y === arr.length - 1) {
    return status;
  }
  const beside = [
    arr[x - 1][y - 1], arr[x][y - 1], arr[x + 1][y - 1],
    arr[x - 1][y], arr[x + 1][y],
    arr[x - 1][y + 1], arr[x][y + 1], arr[x + 1][y + 1],
  ];
  let numBeside = 0;
  beside.forEach((cel) => { if (cel === 1) numBeside += 1; });
  if (status === 1) {
    if (numBeside > 1 && numBeside < 4) return 1;
    return 0;
  } if (numBeside === 3) return 1;
  return 0;
};

export { createArrays, law };
