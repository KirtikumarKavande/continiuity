var lowestCommonAncestor = function(root, p, q) {
  if(root===p || root===q||root===null){
      return root
  }

  let left=lowestCommonAncestor(root.left,p,q)
  let right=lowestCommonAncestor(root.right,p,q)

  if(left!==null && right!==null) return root

  if(left===null) {
      return right
  }else{
      return left
  }
};