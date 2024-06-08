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
    str += current.data + "->";
    current = current.next;
  }
  return str;
};

//add node at any position
LinkedList.prototype.addNodeAtAnyPosition = function (prevNode, data) {
  if (!prevNode) return "node can not be empty";
  const newNode = new Node(data, prevNode.next);
  prevNode.next = newNode;
};

const linkedList = new LinkedList();
linkedList.insertNodeAtStart(2);
linkedList.insertNodeAtTheLast(4);
linkedList.insertNodeAtTheLast(5);
linkedList.insertNodeAtTheLast(6);

let current = linkedList.head;
while (current !== null && current.data !== 6) {
  current = current.next;
}

linkedList.addNodeAtAnyPosition(current, 1000);

//delete first node
LinkedList.prototype.deleteFirstNode = function () {
  if (!this.head) return;
  this.head = this.head.next;
};

//delete last node

LinkedList.prototype.deleteLastNode = function () {
  if (!this.head) return null;

  if (!this.head.next) {
    this.head = null;
    return null;
  }

  let secondLast = this.head;
  while (secondLast.next.next) {
    secondLast = secondLast.next;
  }
  secondLast.next = null;
};

LinkedList.prototype.deleteNodeByKey = function (key) {
  if (!this.head) return;
  if (this.head.data === key) {
    this.head = this.head.next;
  }
  let current = this.head;
  while (current.next !== null) {
    if (current.next.data === key) {
      current.next = current.next.next;
    }
    current = current.next;
  }
};
// linkedList.deleteNodeByKey(2);

LinkedList.prototype.reverseLinkedList = function () {
  let currentNode = this.head;
  let nextNode = null;
  let prevNode = null;
  while (currentNode) {
    nextNode = currentNode.next;
    currentNode.next = prevNode;
    prevNode = currentNode;
    currentNode=nextNode
  }
  this.head=prevNode           //don't forget to update head
};
// linkedList.reverseLinkedList()
console.log(linkedList.printList());
