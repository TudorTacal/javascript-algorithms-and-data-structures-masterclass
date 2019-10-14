class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push (val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop () {
    if (!this.head) return undefined;
    let current = this.head;
    while (current) {
      current = current.next;
      if (current && current.next === this.tail) {
        current.next = null;
        this.tail = current;
      }
    }
    this.length--;
    return this.tail;
  }
}

module.exports = {
  Node,
  SinglyLinkedList,
};

