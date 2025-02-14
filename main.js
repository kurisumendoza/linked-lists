import { Node, LinkedList } from './linked-list.js';

const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');
list.prepend('eagle');
list.prepend('monkey');

console.log(list.tail());
console.log(list.head());
console.log(list.size());
