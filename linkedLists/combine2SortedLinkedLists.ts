/**
 * Given an array of linked list, lists, where each linked list's node 
 * values are in ascending order, combine all these linked lists into 
 * a single sorted linked list and return the head node of the combined linked list.

  The linked list is represented by a sequence of ListNodes, where each 
  node points to the next node in the sequence, or null if it is the last node.

  A ListNode has the following interface:

  interface ListNode {
    val: number;
    next: ListNode | null;
  }

  Input
  listA: ListNode: Head node of the first linked list. Examples display 
  each linked list as an array of values within the list
  listB: ListNode: Head node of the second linked list. Examples display 
  each linked list as an array of values within the list

  Examples
  Input: listA = [-3,-1,9,10], listB = [-10,3,4,6,9]
  Output: [-10,-3,-1,3,4,6,9,9,10]
  Explanation: Combining the sorted lists [-3, -1, 9, 10] and [-10, 3, 4, 6, 9] 
  results in a single sorted list [-10, -3, -1, 3, 4, 6, 9, 9, 10].

  Input: listA = [1,2,4], listB = [1,3,4]
  Output: [1,1,2,3,4,4]
  Explanation: Combining the sorted lists [1, 2, 4] and [1, 3, 4] 
  results in a single sorted list [1, 1, 2, 3, 4, 4].

  Input: listA = [], listB = [0]
  Output: [0]
  Explanation: Combining the empty list [] with the sorted list [0] 
  results in the list [0].
  
  Constraints
  1 <= Number of nodes <= 50
  -100 <= ListNode.val <= 100
 */

interface ListNode {
  val: number;
  next: ListNode | null;
}

/**
 * @param listA
 * @param listB
 * TC = O(n + m)
 * SC = O(n + m)
 * @returns
 */
function linkedListCombineTwoSorted1(
  listA: ListNode | null,
  listB: ListNode | null
): ListNode | null {
  if (listA === null) {
    return listB;
  }

  if (listB === null) {
    return listA;
  }

  if (listA.val <= listB.val) {
    listA.next = linkedListCombineTwoSorted1(listA.next, listB);
    return listA;
  }

  listB.next = linkedListCombineTwoSorted1(listA, listB.next);
  return listB;
}

/**
 * @param listA
 * @param listB
 * TC = O(n + m)
 * SC = O(1)
 * @returns
 */
function linkedListCombineTwoSorted2(
  listA: ListNode | null,
  listB: ListNode | null
): ListNode | null {
  // Dummy node to act as the previous node to the head of the combined list
  let dummy: ListNode = { val: -1, next: null };
  // Pointer to the last node in the combined list, initially set to dummy
  let prev = dummy;

  while (listA !== null && listB !== null) {
    if (listA.val <= listB.val) {
      prev.next = listA;
      listA = listA.next;
    } else {
      prev.next = listB;
      listB = listB.next;
    }

    prev = prev.next;
  }

  if (listA !== null) {
    prev.next = listA;
  } else {
    prev.next = listB;
  }

  return dummy.next;
}
