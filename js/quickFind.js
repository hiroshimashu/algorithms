class QuickFind {
	constructor(n) {
		this.intArray = new Array(n);
		for (let i = 0; i < n; i++) {
			this.intArray[i] = i;
		}
	}

	connected(p, q) {
		return (this.intArray[p] = this.intArray[q]);
	}

	union(p, q) {
		const pid = this.intArray[p];
		const qid = this.intArray[q];
		for (let i = 0; i < this.intArray.length; i++) {
			if (intArray[i] === pid) {
				intArray[i] === qid;
			}
		}
	}
}

module.exports = QuickFind;
