
class Element {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class List {
  constructor (array) {
    this.length = 0;
    this.head = null;
    if (array !== undefined) {
      array.forEach(value => this.add(new Element(value)));
    }
  }

  add(element) {
    this.length++;
    element.next = this.head;
    this.head = element;
  }

  toArray() {
    var array = [];
    var element = this.head;
    while (element != null) {
      array.push(element.value);
      element = element.next
    }
    return array;
  }

  reverse() {
    var element = this.head;
    var newTail = null;

    while (element != null) {
      if (element.next == null) {
        this.head = element
      }
      var nextElement = element.next
      element.next = newTail

      element = nextElement
    }
    return this;
  }
}

module.exports = { List, Element };
