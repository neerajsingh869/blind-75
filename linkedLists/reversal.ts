/**
 * Given the head of a linked list, reverse the list and return the 
 * new head of the reversed list.

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
  Input: list = [1,2,3,4,5]
  Output: [5,4,3,2,1]
  Explanation: The input list [1, 2, 3, 4, 5] creates a linked list that,
  when reversed, produces [5, 4, 3, 2, 1].

  Input: list = []
  Output: []
  Explanation: The input list is empty, so the reversed linked list is also empty.

  Constraints
  1 <= Number of nodes <= 1000
  -1000 <= ListNode.val <= 100
 */

interface ListNode {
  val: number;
  next: ListNode | null;
}

/**
 * @param head
 * TC = O(n)
 * SC = O(n)
 * Prone to logical mistakes approach
 * @returns
 */
function reverseLinkedList1(head: ListNode | null): ListNode | null {
  if (!head) {
    return head;
  }

  let newHead = reverseLinkedList1(head?.next);

  // IMPORTANT CHECK
  if (!newHead) {
    newHead = head;
  }

  if (head.next) {
    head.next.next = head;
  }
  head.next = null;

  return newHead;
}

/**
 * @param head
 * TC = O(n)
 * SC = O(n)
 * Simpler approach than previous one
 * @returns
 */
function reverseLinkedList2(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  let newHead = reverseLinkedList2(head.next);

  head.next.next = head;
  head.next = null;

  return newHead;
}

/**
 * @param head
 * TC = O(n)
 * SC = O(1)
 * Best approach to solve the problem
 * @returns
 */
function reverseLinkedList3(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr = head;

  while (curr) {
    let nextNode = curr.next;

    curr.next = prev;

    prev = curr;
    curr = nextNode;
  }

  return prev;
}

// Function to convert vector to linked list
function vectorToLinkedList(values: number[]): ListNode | null {
  if (values.length === 0) {
    return null; // Return null for an empty array
  }

  // Create the head node of the linked list
  const head: ListNode = { val: values[0], next: null };
  let current: ListNode = head;

  // Iterate over the array to create the rest of the linked list
  for (let i = 1; i < values.length; i++) {
    current.next = { val: values[i], next: null };
    current = current.next;
  }

  return head;
}

// Function to convert linked list to vector
function linkedListToVector(head: ListNode | null): number[] {
  const result: number[] = [];
  let current: ListNode | null = head;

  // Traverse the linked list and add node values to the array
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}
