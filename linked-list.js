class Node {
  value = null;
  nextNode = null;

  constructor(value, nextNode) {
    if (value) this.value = value;
    if (nextNode) this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.list = null;
  }

  append(value) {
    if (!this.list) this.list = new Node(value);
    else if (this.list.nextNode === null) this.list.nextNode = new Node(value);
    else this.tail().nextNode = new Node(value);
  }

  prepend(value) {
    if (!this.list) this.append(value);
    else {
      this.list = new Node(value, this.head());
    }
  }

  size() {}

  head() {
    if (!this.list) return null;
    else return this.list;
  }

  tail() {
    if (!this.list) return null;

    let curNode = this.list;
    while (curNode.nextNode !== null) {
      curNode = curNode.nextNode;
    }
    return curNode;
  }

  at(index) {}

  pop() {}

  contains(value) {}

  find(value) {}

  toString() {}
}

export { Node, LinkedList };
