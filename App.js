var reverseList = function (head) {
  if (!head || !head.next) return head
  let ith = null
  let jth = head
  let kth = head.next
  while (jth) {
    jth.next = ith;
    ith = jth
    jth = kth
    if (kth) {
      kth = kth.next
    }
  }
  return ith
};