/**
 * Given the root of a binary tree, return its maximum depth.
 *
 * A binary tree's maximum depth is the number of nodes along the
 * longest path from the root node down to the farthest leaf node.
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
 * @param {TreeNode} root
 * @return {number}
 */
// Time complexity -> O(n), Space complexity -> O(n)
var maxDepth1 = function (root) {
  if (root == null) return 0;

  return Math.max(maxDepth1(root.left), maxDepth1(root.right)) + 1;
};

// Time complexity -> O(n), Space complexity -> O(n)
var maxDepth3 = function (root) {
  if (root == null) return 0;

  // mimic recursion using stack data structure
  let stack = [];
  stack.push([1, root]);

  let maxDepth = 0;
  while (stack.length) {
    let currNodePair = stack.pop();

    maxDepth = Math.max(maxDepth, currNodePair[0]);

    if (currNodePair[1].left) {
      stack.push([currNodePair[0] + 1, currNodePair[1].left]);
    }

    if (currNodePair[1].right) {
      stack.push([currNodePair[0] + 1, currNodePair[1].right]);
    }
  }

  return maxDepth;
};

// Time complexity -> O(n), Space complexity -> O(n)
var maxDepth3 = function (root) {
  if (root === null) return 0;

  let que = [];
  que.push(root);
  que.push(null);

  let depth = 0;
  while (que.length) {
    let currNode = que[0];
    que.shift();

    if (currNode === null) {
      depth = depth + 1;

      if (que.length) {
        que.push(null);
      }
    } else {
      if (currNode.left) {
        que.push(currNode.left);
      }

      if (currNode.right) {
        que.push(currNode.right);
      }
    }
  }

  return depth;
};
