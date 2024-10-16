/**
 * Given the root of a binary tree, invert the tree, and return its root.
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
 * @return {TreeNode}
 */
// DFS (Time complexity -> O(n), Space complexity -> O(n))
var invertTree = function(root) {
  if (root == null) return null;

  let leftTreeRoot = invertTree(root.left);
  let rightTreeRoot = invertTree(root.right);

  root.left = rightTreeRoot;
  root.right = leftTreeRoot;

  return root;
};

// BFS (Time complexity -> O(n), Space complexity -> O(n))
var invertTree = function(root) {
  if (root == null) return null;

  let queue = [];
  queue.push(root);

  while (queue.length) {
      let currNode = queue[0];
      queue.shift();

      // you can put the code here too
      /**
       * let temp = currNode.left;
        currNode.left = currNode.right;
        currNode.right = temp;
       */

      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);

      let temp = currNode.left;
      currNode.left = currNode.right;
      currNode.right = temp;
  }

  return root;
};