const QuickUnion = require('./quickUnion');

test('Correctly union function works', () => {
	const quickUnion = new QuickUnion(4);

	quickUnion.union(0, 1);
	expect(quickUnion.root(0)).toBe(1);
});
