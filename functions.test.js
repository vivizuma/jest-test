const {capitalise, reverseString, caesarCipher, calculator, analyseArray} = require('./functions');

test('capitalise', () => {
    expect(capitalise('hello')).toBe('Hello');
});

test('reverseString', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test("analyseArr  min to be 1 in arr 1,2,3", ()=> {
    const result = analyseArray([1,4,3,2])
    expect(result.min).toBe(1)
})


