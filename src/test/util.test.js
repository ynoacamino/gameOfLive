import { createArrays, law } from './util';

test('createArrays 2 elements', () => {
  expect(createArrays(2)).toEqual([[0, 0], [0, 0]]);
});

test('createArrays 3 elements', () => {
  expect(createArrays(3)).toEqual([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
});

test('createArrays 4 elements', () => {
  expect(createArrays(4)).toEqual([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);
});

test('createArrays 5 elements', () => {
  expect(createArrays(5)).toEqual([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ]);
});

test('law function newSquare', () => {
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

  expect(newArr).toEqual([[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]]);
});

test('law function square', () => {
  const arr = createArrays(4);
  arr[1][1] = 1;
  arr[2][2] = 1;
  arr[2][1] = 1;
  arr[1][2] = 1;

  const newArr = createArrays(4);
  arr.forEach((col, x) => {
    col.forEach((cel, y) => {
      newArr[x][y] = law(arr, x, y, cel);
    });
  });

  expect(newArr).toEqual([[0, 0, 0, 0], [0, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 0]]);
});

test('law function DEAD 1', () => {
  const arr = createArrays(4);
  arr[1][1] = 1;
  arr[2][2] = 1;

  const newArr = createArrays(4);
  arr.forEach((col, x) => {
    col.forEach((cel, y) => {
      newArr[x][y] = law(arr, x, y, cel);
    });
  });

  expect(newArr).toEqual([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]);
});

test('law function DEAD 2', () => {
  const arr = createArrays(4);
  arr[1][1] = 1;

  const newArr = createArrays(4);
  arr.forEach((col, x) => {
    col.forEach((cel, y) => {
      newArr[x][y] = law(arr, x, y, cel);
    });
  });

  expect(newArr).toEqual([[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]);
});
