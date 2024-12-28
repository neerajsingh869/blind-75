/**
 * Given the root of a binary tree, return the level order 
 * traversal of its nodes' values. (i.e., from left to right, level by level).
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
 * @return {number[][]}
 */
// DFS (Time complexity -> O(n * n), Space complexity -> O(n))
var levelOrder = function(root) {
  if (root === null) return [];

  let queue = [];
  let storeTree = [];
  queue.push(root);
  queue.push(null);
  while (queue.length) {
      let currNode = queue[0];
      queue.shift();

      if (currNode === null) {
          storeTree.push(null);
          if (queue.length) {
              queue.push(null);
          }
      } else {
          storeTree.push(currNode.val);
          if (currNode.left) queue.push(currNode.left);
          if (currNode.right) queue.push(currNode.right);
      }
  }

  let ans = [];
  let temp = [];
  for (let nodeVal of storeTree) {
      if (nodeVal != null) {
          temp.push(nodeVal);
      } else {
          ans.push(temp);
          temp = [];
      }
  }

  return ans;
};