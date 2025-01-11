/**
 * PROBLEM LINK: https://www.greatfrontend.com/interviews/study/blind75/questions/algo/linked-list-detect-cycle
 * 
 * Given the head node of a linked list, determine whether the 
 * list contains a cycle. Return true if the list contains a cycle; 
 * otherwise, return false.

  A linked list has a cycle if there exists a node that can be revisited 
  by continuously following the next pointers.

  The linked list is represented by a sequence of ListNodes, where each 
  node points to the next node in the sequence, or null if it is the last node.

  A ListNode has the following interface:

  interface ListNode {
    val: number;
    next: ListNode | null;
  }

  Input
  head: ListNode: Head of the linked list. Examples display each linked 
  list as an array of values within the list

  Examples
  Input: list = [1,2,3], pos = 0
  Output: true
  Explanation: The linked list is constructed from the array [1, 2, 3] 
  with the pos = 0, which means the last node (value 3) connects back to 
  the 0th node (value 1). The structure of the linked list is: 1 -> 2 -> 3 -> (back to 1). 
  This forms a cycle starting from node 1. Hence, the output is true.

  Input: list = [1], pos = -1
  Output: false
  Explanation: The linked list has only one node with the value 1. The pos = -1 
  indicates that the last node does not connect to any other node. The structure 
  of the linked list is: 1 -> null. Since the list terminates with null and does 
  not loop back to any earlier node, it does not contain a cycle. Hence, the output is false.

  Input: list = [3,2,0,-4], pos = 1
  Output: true
  Explanation: The linked list is constructed from the array [3, 2, 0, -4] with 
  the pos = 1, which means the last node (value -4) connects back to the 1st 
  node (value 2). The structure of the linked list is: 3 -> 2 -> 0 -> -4 -> (back to 2). 
  This forms a cycle starting at node 2. Hence, the output is true.

  Constraints
  0 <= Number of nodes <= 1000
  -1000 <= ListNode.val <= 1000
 */

interface ListNode {
  val: number;
  next: ListNode | null;
}

/**
 * @param head
 * TC = O(n)
 * SC = O(n)
 * @returns
 */
function linkedListDetectCycle1(head: ListNode | null): boolean {
  let isVisited = new Map<ListNode | null, boolean>();

  let curr = head;
  while (curr != null) {
    if (isVisited.has(curr)) {
      return true;
    }

    isVisited.set(curr, true);
    curr = curr.next;
  }

  return false;
}

/**
 * @param head
 * TC = O(n)
 * SC = O(1)
 * @returns
 */
function linkedListDetectCycle(head: ListNode | null): boolean {
  // Create a Set to track nodes that have been visited
  const nodesSeen = new Set<ListNode>();
  // Start with the head of the linked list
  let current = head;

  // Traverse the linked list
  while (current !== null) {
    // If the current node has been seen before, a cycle is present
    if (nodesSeen.has(current)) {
      return true;
    }

    // Add the current node to the Set of seen nodes
    nodesSeen.add(current);

    // Move to the next node in the linked list
    current = current.next;
  }

  // If the end of the list is reached without finding a cycle, return false
  return false;
}

/**
 * @param head
 * TC = O(n)
 * SC = O(1)
 * @returns
 */
function linkedListDetectCycle2(head: ListNode | null): boolean {
  if (head == null || head.next == null) {
    return false;
  }

  let slow = head;
  let fast = head;

  while (fast != null && fast.next != null) {
    slow = slow.next as ListNode;
    fast = fast.next.next as ListNode;

    if (fast === slow) {
      return true;
    }
  }

  return false;
}
