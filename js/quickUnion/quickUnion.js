class QuickUnion {
	constructor(n) {
		this.intArray = new Array(n);
		for (let i = 0; i < n; i++) {
			this.intArray[i] = i;
		}
	}

	root(i) {
		while (i != this.intArray[i]) {
			i = this.intArray[i];
		}
		return i;
	}

	connected(p, q) {
		return this.root(p) === this.root(q);
	}

	union(p, q) {
		i = this.root(p);
		j = this.root(q);
		id[i] = i;
	}
}
