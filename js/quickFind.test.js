const QuickFind = require('./quickFind');

test('Correctly initialiaze', () => {
	const quickFind = new QuickFind(4);
	const expected = [0, 1, 2, 3];
	expect(quickFind.intArray).toEqual(expected);
});

test('Correctly connected function works', () => {
	const quickFind = new QuickFind(4);

	expect(quickFind.connected(0, 1)).toBe(false);
});

test('Correctly union function works', () => {
	const quickFind = new QuickFind(4);
	const expected = [1, 1, 2, 3];
	expect(quickFind.union(0, 1)).toEqual(expected);
});
