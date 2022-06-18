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
