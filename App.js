/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function (head) {
  last = head;
  let lengthOfLL = 0;
  while (last) {
    lengthOfLL++;
    last = last.next;
  }
  let middleOFLL = Math.floor(lengthOfLL / 2);
  if (middleOFLL === 0) {
    return (head = null);
  }

  let currentPostion = head;
  while (middleOFLL !== 1) {
    middleOFLL--;
    currentPostion = currentPostion.next;
  }
  currentPostion.next = currentPostion.next.next;

  return head;
};
