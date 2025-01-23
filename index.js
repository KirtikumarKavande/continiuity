class minHeap{
  constructor(){
    this.heap=[]

  }
  getParentNodeIndex(index){
    return Math.floor((index - 1) / 2);

  }
  getLeftChildIndex(index) {
    return 2 * index + 1
  }

getRightChildIndex(index) {
    return 2 * index + 2
}
  insertNode(ele){
    this.heap.push(ele)
    let index=this.heap.length-1
    this.#heapifyUp(index)

  }

  //utility method

  #swap(index1, index2){
    let temp=this.heap[index2]
    this.heap[index2]=this.heap[index1]
    this.heap[index1]=temp
  }

  // utility method 
  #heapifyUp(index){
    while(this.heap[index]< this.heap[this.getParentNodeIndex(index)] && index>0){
      this.#swap(index,this.getParentNodeIndex(index))
      index = this.getParentNodeIndex(index)
    }
    
  }
  #heaifyDown(index){
    // console.log(index)
    let leftSwap=false
    let rightSwap=false
    let parentIndex;
    if(index>0){
      parentIndex=this.getParentNodeIndex(index)
    }else{
      parentIndex=0
    }
    // console.log(parentIndex)

    let leftNode= this.heap[this.getLeftChildIndex(parentIndex)] 
    let rightNode=this.heap[this.getRightChildIndex(parentIndex)] 
    if(leftNode && this.heap[parentIndex]>leftNode){
      this.#swap(parentIndex,this.getLeftChildIndex(parentIndex))
      leftSwap=true
    }
    if(rightNode &&  this.heap[parentIndex]>rightNode){
      this.#swap(parentIndex,this.getRightChildIndex(parentIndex))
      rightSwap=true
    }
    if(leftSwap){
      let newIndex=this.getLeftChildIndex(index)
      this.#heaifyDown(newIndex)
    }
    if(rightSwap){
      let newIndex=this.getRightChildIndex(index)
      this.#heaifyDown(newIndex)
    }
 
  }
deleteNode(element){
  // put last element in deleted place
  let index=this.heap.findIndex((item)=>item===element)
 
  let lastElement=this.heap.pop()
  if(index===this.heap.length){
     return
  }
  this.heap[index]=lastElement
  this.#heaifyDown(index)

}

  getArray(){
    return this.heap
  }
}

let heap = new minHeap()
heap.insertNode(2);
heap.insertNode(4);
heap.insertNode(3);
heap.insertNode(8);
heap.insertNode(5);
heap.insertNode(9);
heap.insertNode(7);

console.log("Initial heap:", heap.getArray());  // [4, 7, 5, 9, 8, 10, 6]
heap.deleteNode(4);  // Deleting root
console.log("After deleting 4:", heap.getArray());