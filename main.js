import LinkedList from './linked-list.js';

const list = new LinkedList();

list.append('dog');
list.append('cat');
list.append('parrot');
list.append('hamster');
list.append('snake');
list.append('turtle');
list.prepend('eagle');
list.prepend('monkey');
list.pop();
list.insertAt('lion', 4);
list.removeAt(5);

console.log('TAIL: ', list.tail());
console.log('HEAD: ', list.head());
console.log('SIZE: ', list.size());
console.log('NODE #3: ', list.at(3));
console.log('CONTAINS (CAT):', list.contains('cat'));
console.log('CONTAINS (TURTLE):', list.contains('turtle'));
console.log('FIND (MONKEY): ', list.find('monkey'));
console.log('FIND (TURTLE): ', list.find('turtle'));
console.log('LOG LIST: ', list.toString());
