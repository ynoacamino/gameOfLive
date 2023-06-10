/* eslint-disable import/extensions */
import { createArrays, law, suma } from './test/util.js';

const test1 = () => {
  console.log('Test 1');
  const arr = createArrays(4);
  arr[1][1] = 1;
  arr[2][2] = 1;
  arr[2][1] = 1;

  const newArr = createArrays(4);
  arr.forEach((col, x) => {
    col.forEach((cel, y) => {
      newArr[x][y] = law(arr, x, y, cel);
    });
  });

  if (
    newArr[1][1] === 1
    && newArr[2][2] === 1
    && newArr[1][2] === 1
    && newArr[2][1] === 1
  ) {
    console.log('Test pass');
  } else {
    console.log('Test fail');
  }
};

const test2 = () => {
  console.log('Test 2');

  if (suma(1, 2) === 3) {
    console.log('Test pass');
  } else {
    console.log('Test fail');
  }
};

test1();
test2();
