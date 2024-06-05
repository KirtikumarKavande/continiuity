class stackBuilder {
  constructor() {
    this.stack = [];
  }
  push(data) {
    this.stack.push(data);
  }
  pop() {
    this.stack.pop();
  }

  size() {
    return this.stack.length;
  }
  isIncludes(data) {
  return this.stack.includes(data);
  }
}

const stack=new stackBuilder();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push({name:"kirtikumar"});
console.log(stack.size());
console.log(stack.isIncludes(9));