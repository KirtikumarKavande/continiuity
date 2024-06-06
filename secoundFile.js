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
while (current.next == null || current.data !== 4) {
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
    this.head=null
    return null;
  }
   
  let secondLast = this.head;
  while (secondLast.next.next) {
    secondLast = secondLast.next;
  }
  secondLast.next = null;
};

linkedList.deleteLastNode();
console.log(linkedList.printList());
