class MaxHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    let index = this.values.length - 1;
    while (index > 0) {
        let parentIndex = Math.floor((index - 1) / 2);
        if (value <= this.values[parentIndex]) break;
        [this.values[index], this.values[parentIndex]] = [this.values[parentIndex], this.values[index]];
        index = parentIndex;
    }
    return this.values;
  }
}

module.exports = {
  MaxHeap,
}