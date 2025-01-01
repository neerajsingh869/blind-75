/**
 * Given the roots of two binary trees p and q, write a function to check 
 * if they are the same or not.

 * Two binary trees are considered the same if they are structurally 
 * identical, and the nodes have the same value.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// DFS (Time complexity -> O(min(n, m)), Space complexity -> O(min(hn, hm)))
var isSameTree1 = function (p, q) {
  if (!p && !q) return true;
  if (!p && q) return false;
  if (!q && p) return false;

  if (p.val != q.val) return false;

  return isSameTree1(p.left, q.left) && isSameTree1(p.right, q.right);
};

// Mimic recursion stack (Time complexity -> O(min(n, m)), Space complexity -> O(min(n, m)))
var isSameTree2 = function (p, q) {
  if (!p && !q) return true;
  if (!p && q) return false;
  if (!q && p) return false;

  let stack1 = [];
  let stack2 = [];

  stack1.push(p);
  stack2.push(q);

  while (stack1.length && stack2.length) {
    let currNodeP = stack1.pop();
    let currNodeQ = stack2.pop();

    if (currNodeP.val != currNodeQ.val) return false;

    if (
      currNodeP.left &&
      currNodeQ.left &&
      currNodeP.left.val === currNodeQ.left.val
    ) {
      stack1.push(currNodeP.left);
      stack2.push(currNodeQ.left);
    } else {
      if (!(!currNodeP.left && !currNodeQ.left)) {
        return false;
      }
    }

    if (
      currNodeP.right &&
      currNodeQ.right &&
      currNodeP.right.val === currNodeQ.right.val
    ) {
      stack1.push(currNodeP.right);
      stack2.push(currNodeQ.right);
    } else {
      if (!(!currNodeP.right && !currNodeQ.right)) {
        return false;
      }
    }
  }

  if (stack1.length || stack2.length) return false;

  return true;
};

// BFS (Time complexity -> O(min(n, m) * min(n, m)), Space complexity -> O(min(n, m)))
var isSameTree3 = function (p, q) {
  if (!p && !q) return true;
  if (!p && q) return false;
  if (p && !q) return false;

  let queue1 = [];
  let queue2 = [];

  queue1.push(p);
  queue2.push(q);

  while (queue1.length && queue2.length) {
    let currNodeP = queue1[0];
    let currNodeQ = queue2[0];

    queue1.shift();
    queue2.shift();

    if (currNodeP.val != currNodeQ.val) return false;

    if (
      currNodeP.left &&
      currNodeQ.left &&
      currNodeP.left.val === currNodeQ.left.val
    ) {
      queue1.push(currNodeP.left);
      queue2.push(currNodeQ.left);
    } else {
      if (!(!currNodeP.left && !currNodeQ.left)) {
        z``;
        return false;
      }
    }

    if (
      currNodeP.right &&
      currNodeQ.right &&
      currNodeP.right.val === currNodeQ.right.val
    ) {
      queue1.push(currNodeP.right);
      queue2.push(currNodeQ.right);
    } else {
      if (!(!currNodeP.right && !currNodeQ.right)) {
        return false;
      }
    }
  }

  if (queue1.length || queue2.length) return false;

  return true;
};

/**
 * 
 * @param {TreeNode} a 
 * @param {TreeNode} b 
 * @returns {boolean}
 */
var isSameTree4 = function (a, b) {
  let queue = [];
  queue.push([a, b]);

  while (queue.length) {
    const [a, b] = queue.shift();

    if (!check(a, b)) {
      return false;
    }

    if (a && b) {
      queue.push([a.left, b.left]);
      queue.push([a.right, b.right]);
    }
  }

  return true;
};

// Utility method to check if node a and b are equal
function check(a, b) {
  if (a === null && b === null) {
    return true;
  }

  if (a === null || b === null) {
    return false;
  }

  if (a.val !== b.val) {
    return false;
  }

  return true;
}
