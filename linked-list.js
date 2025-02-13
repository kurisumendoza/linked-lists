class Node {
  value = null;
  nextNode = null;

  constructor(value, nextNode) {
    if (value) this.value = value;
    if (nextNode) this.nextNode = nextNode;
  }
}

class LinkedList {
  appendValue(value) {}

  prependValue(value) {}

  size() {}

  head() {}

  tail() {}

  at(index) {}

  pop() {}

  contains(value) {}

  find(value) {}

  toString() {}
}
