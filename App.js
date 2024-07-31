var pairSum = function (head) {
  if (!head) return 0
  let slow = head
  let fast = head.next
  while (fast?.next?.next) {
    slow = slow.next
    fast = fast.next.next
  }
  let secondHalf = null
  let current = slow.next
  let nxt = current.next

  while (current) {
    current.next = secondHalf
    secondHalf = current
    current = nxt
    if (nxt) {
      nxt = nxt.next
    }
  }
  let max = 0
  while (secondHalf) {
    if (secondHalf.val + head.val > max) {
      max = secondHalf.val + head.val
    }
    secondHalf = secondHalf.next
    head = head.next
  }
  return max

};