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

// Function to add cycle
function addCycle(head: ListNode | null, pos: number): void {
  let posNode: ListNode | null = null;
  let lastNode: ListNode | null = null;
  let counter = 0;
  let current = head;

  while (current !== null) {
    if (counter === pos) {
      posNode = current; // Node at the position to create a cycle
    }
    if (current.next === null) {
      lastNode = current; // Last node of the list
    }
    current = current.next;
    counter++;
  }

  if (lastNode !== null && posNode !== null) {
    lastNode.next = posNode; // Create a cycle
  }
}
