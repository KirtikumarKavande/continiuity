class Node{
  constructor(val){
    this.val=val;
    this.left=null
    this.right=null;
  }
}

class BST{
  constructor(){
    this.root=null
    this.trackedNodeValues=[]

  }

  addNode(val){
  let node= new Node(val)
    
  if(!this.root){
   return this.root=node
  }
    this.placeNodeAtCorrectPosition(this.root,node)
  }
  placeNodeAtCorrectPosition(root,node){
    if(node.val>root.val){
      if(!root.right){
        root.right=node
      }else{
        this.placeNodeAtCorrectPosition(root.right,node)
      }
    }else{
        if(!root.left){
          root.left=node
        }else{
          this.placeNodeAtCorrectPosition(root.left,node)
        }
    }
  
  }


  DFS(root=this.root){
    if(!root) return "supereball"
    this.trackedNodeValues.push(root.val)
    this.DFS(root.left)
    this.DFS(root.right)
    return this.trackedNodeValues
  }
    //  check why  below giving you different answer death imp
    // if(!root) return 
    // if(!root) return null and 

}



let tree=new BST()
tree.addNode(4)
tree.addNode(3)
tree.addNode(6)
tree.addNode(8)
tree.addNode(12)
tree.addNode(2)
console.log(tree.DFS()) 
console.log(tree.DFS()) 