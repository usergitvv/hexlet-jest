import reverse from '../src/index.js';

/*
Command to start npx jest (copy string "NODE_OPTIONS..." beneath and paste it to terminal):

NODE_OPTIONS=--experimental-vm-modules npx jest

(for Code_coverage it's necessary add flag --coverage after npx jest)
*/

test('reverse', () => {
    expect(reverse('hello')).toEqual('olleh');
    expect(reverse('')).toEqual('');
});
