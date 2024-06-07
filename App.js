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

doublyLikedList.insertAtTheBeginning(4);
doublyLikedList.insertAtTheBeginning(5);

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
console.log(doublyLikedList.printList());
