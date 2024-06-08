class Node {
  constructor(data, next = null, prev = null) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}
class DoublyLikedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
}

DoublyLikedList.prototype.insertAtTheBeginning = function (data) {
  const newNode = new Node(data, this.head, null);
  if (this.head !== null) {
    this.head.prev = newNode;
  }

  this.head = newNode;
  if (this.tail === null) {
    this.tail = newNode;
  }
};

const doublyLikedList = new DoublyLikedList();

DoublyLikedList.prototype.printList = function () {
  let current = this.head;
  let str = "";
  while (current !== null) {
    console.log(current.data);
    str += current.data + "->";
    current = current.next;
  }
  return str;
};
DoublyLikedList.prototype.insertNodeAtLast = function (data) {
  const newNode = new Node(data, null, this.tail);
  if (this.tail !== null) {
    this.tail.next = newNode;
  }
  if (!this.head) {
    this.head = newNode;
  }
  this.tail = newNode;
};

DoublyLikedList.prototype.insertNodeAfterGivenNode = function (
  givenNode,
  data
) {
  const newNode = new Node(data, null, givenNode);
  if (!givenNode) return;

  if (givenNode.next) {
    newNode.next = givenNode.next;
    givenNode.next.prev = newNode;
    newNode.prev = givenNode;
  }

  givenNode.next = newNode;
  if (!givenNode.next) {
    this.tail = givenNode;
  }
};
doublyLikedList.insertNodeAtLast(7);
doublyLikedList.insertNodeAtLast(8);
// doublyLikedList.insertNodeAtLast(9);

// doublyLikedList.insertNodeAtLast(10);

let current = doublyLikedList.head;
while (current !== null && current.data !== 10) {
  current = current.next;
}

doublyLikedList.insertNodeAfterGivenNode(current, 1000);


console.log(doublyLikedList.printList());
