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
    else this.list = new Node(value, this.head());
  }

  insertAt(value, index) {
    if (index >= this.size()) this.append(value);
    else if (index <= 0) this.prepend(value);
    else this.at(index - 1).nextNode = new Node(value, this.at(index));
  }

  size() {
    if (!this.list) return 0;

    let nodeSize = 1;
    let curNode = this.list;
    while (curNode.nextNode !== null) {
      curNode = curNode.nextNode;
      nodeSize++;
    }

    return nodeSize;
  }

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

  at(index) {
    if (!this.list || this.size() < index) return null;

    let curNode = this.list;
    let curIndex = 0;
    while (curIndex < index) {
      curNode = curNode.nextNode;
      curIndex++;
    }

    return curNode;
  }

  pop() {
    if (!this.list) return;
    if (this.size() === 1) this.list = null;
    else this.at(this.size() - 2).nextNode = null;
  }

  contains(value) {
    if (!this.list) return false;

    let curNode = this.list;
    while (curNode !== null) {
      if (curNode.value === value) return true;
      else curNode = curNode.nextNode;
    }

    if (curNode === null) return false;
  }

  find(value) {
    if (!this.list) return null;

    let curNode = this.list;
    let curIndex = 0;
    while (curNode !== null) {
      if (value === curNode.value) return curIndex;
      else {
        curNode = curNode.nextNode;
        curIndex++;
      }
    }
    return curNode;
  }

  toString() {
    let listString = '';
    let curNode = this.list;
    while (curNode !== null) {
      if (curNode.value) listString += `( ${curNode.value} ) -> `;
      curNode = curNode.nextNode;
    }
    return (listString += null);
  }
}

export default LinkedList;
