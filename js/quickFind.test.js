const QuickFind = require('./quickFind');

test('Correctly initialiaze', () => {
	const quickFind = new QuickFind(4);
	const expected = [0, 1, 2, 3];
	expect(quickFind.intArray).toEqual(expected);
});
