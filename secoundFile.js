class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
}

// inserting node at start when linked List is empty
LinkedList.prototype.insertNodeAtStart = function (data) {
  const newNode = new Node(data);
  this.head = newNode;
  return newNode;
};

// inserting node at the last
LinkedList.prototype.insertNodeAtTheLast = function (data) {
  const newNode = new Node(data);
  if (!this.head) {
    this.head = newNode;
    return;
  }
  let last = this.head;

  while (last.next !== null) {
    last = last.next;
  }

  last.next = newNode;
};

// print the linked list
LinkedList.prototype.printList = function () {
  let current = this.head;
  let str = "";
  while (current !== null) {
    console.log(current);
    str += current.data + "->";
    current = current.next;
  }
  return str;
};

const linkedList = new LinkedList();
linkedList.insertNodeAtStart(2);
linkedList.insertNodeAtTheLast(4);
linkedList.insertNodeAtTheLast(5);
linkedList.insertNodeAtTheLast(6);

// Print the linked list to see its contents
console.log(linkedList.printList());
