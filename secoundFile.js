class BuildQueue {
  constructor() {
    this.queue = [];
  }
  enqueue(data) {
    this.queue.push(data);
  }

  dequeue() {
    if (!this.isEmpty()) {
      return this.queue.shift();
    }
  }
  isEmpty() {
    return this.queue.length === 0;
  }

  printALLArray() {
    return this.queue;
  }
}

const queue = new BuildQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.dequeue();
console.log(queue.printALLArray());

console.log(queue.isEmpty());
