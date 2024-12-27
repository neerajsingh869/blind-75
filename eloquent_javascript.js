/**
 * Write a class called Group (since Set is already taken). 
 * Like Set, it has add, delete, and has methods. Its constructor 
 * creates an empty group, add adds a value to the group 
 * (but only if it isn’t already a member), delete removes 
 * its argument from the group (if it was a member), and has 
 * returns a Boolean value indicating whether its argument 
 * is a member of the group.

Use the === operator, or something equivalent such as indexOf, 
to determine whether two values are the same.

Give the class a static from method that takes an iterable object 
as its argument and creates a group that contains all the values 
produced by iterating over it.

class Group {
  // Your code here.
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false
 */

class Group {
  storage;

  constructor() {
    this.storage = [];
  }

  add(val) {
    if (!this.has(val)) {
      this.storage.push(val);
    }
  }

  delete(val) {
    this.storage = this.storage.filter(item => item != val);
  }

  has(val) {
    return this.storage.includes(val);
  }

  static from(iterableStorage) {
    let newGroup = new this();

    for (let item of iterableStorage) {
      newGroup.storage.push(item);
    }

    return newGroup;
  }
}

class GroupIterator {
  storage;

  constructor(storage) {
    this.storage = storage;
  }

  next() {
    if (this.storage.length === 0) {
      return {done: true};
    }

    let firstEle = this.storage[0];

    this.storage.shift();

    return {value: firstEle, done: false};
  }
}

Group.prototype[Symbol.iterator] = function () {
  return new GroupIterator(this.storage);
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}