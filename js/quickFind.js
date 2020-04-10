class QuickFind {
	constructor(n) {
		this.intArray = new Array(n);
		for (let i = 0; i < n; i++) {
			this.intArray[i] = i;
		}
	}
}

module.exports = QuickFind;
