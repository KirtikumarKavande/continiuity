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
doublyLikedList.insertNodeAtLast(7)
doublyLikedList.insertNodeAtLast(8)
doublyLikedList.insertNodeAtLast(9)

console.log(doublyLikedList.printList());
