import fill from '../src/fill.js';

/*
Command to start npx jest(copy string "NODE_OPTIONS..." beneath and paste it to terminal):

NODE_OPTIONS=--experimental-vm-modules npx jest

(for Code_coverage it's necessary add flag --coverage after npx jest)
*/

let array;
beforeEach(() => {
    array = [1, 2, 3, 4];
});

test('fill', () => {
    expect(fill(array, '&', 1, 3)).toEqual([1, '&', '&', 4]);
});

test('fillTwo', () => {
    expect(fill(array, '&')).toEqual(['&', '&', '&', '&']);
});

test('fillThree', () => {
    expect(fill(array, '&', 4)).toEqual([1, 2, 3, 4]);
});

test('fillFour', () => {
    fill(array, '&', 0, 10);
    expect(fill(array, '*', 2, 5)).toEqual(['&', '&', '*', '*']);
});

test('fillEmpty', () => {    
    expect(fill([], '*')).toEqual([]);
});

/*
Teacher's decision
Обратить внимание на то, как учитель именует тестовые проверки!
Именование должно отображать суть теста.

// BEGIN
let array;

beforeEach(() => {
  array = [1, 2, 3, 4];
});

test('common case', () => {
  fill(array, '*', 1, 3);
  expect(array).toEqual([1, '*', '*', 4]);
});

test('should use default start and end', () => {
  fill(array, '*');
  expect(array).toEqual(['*', '*', '*', '*']);
});

test('should works with start >= length', () => {
  fill(array, '*', 10, 12);
  expect(array).toEqual([1, 2, 3, 4]);
});

test('should works with start >= end', () => {
  fill(array, '*', 2, 2);
  expect(array).toEqual([1, 2, 3, 4]);
});

test('should works with end > length', () => {
  fill(array, '*', 0, 10);
  expect(array).toEqual(['*', '*', '*', '*']);
});
// END
*/
