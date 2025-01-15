/**
 * PROBLEM LINK: https://www.greatfrontend.com/interviews/study/blind75/questions/algo/binary-tree-maximum-total-path
 * 
 * Given the root of a binary tree, determine the maximum 
 * possible sum of any non-empty path within the tree.

  In a binary tree, a path is defined as a sequence of nodes 
  where each consecutive pair of nodes in the sequence is directly 
  connected by an edge. A node can appear in the path sequence only 
  once, and the path does not necessarily need to include the root. 
  The sum of a path is calculated by adding up the values of all 
  nodes present in that path.

  The binary tree is represented by a collection of TreeNodes, where 
  each node has optional left and right child nodes, which are also TreeNodes.

  A TreeNode has the following interface:

  interface TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
  }

  Input
  root: TreeNode: Root node of the tree. Examples display a 
  level-order traversal of the tree

  Examples
  Input: root = [4,3,5]
  Output: 12
  Explanation: The optimal path is 3 -> 4 -> 5 with a sum of 12.
  Input: root = [-2,1]
  Output: 1
  Explanation: The optimal path is the single node with value 1.
  Input: root = [-30,8,22,null,null,17,8]
  Output: 47
  Explanation: The optimal path is 17 -> 22 -> 8 with a sum of 47.

  Constraints
  1 <= Number of nodes <= 10,000
  -100 <= TreeNode.val <= 100
 */

interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

interface MaximumPathPair {
  maxPathSum: number;
  maxLinearPathSumFromRoot: number;
}

/**
 * @param root
 * TC = O(n * n)
 * SC = O(h)
 * @returns
 */
function binaryTreeMaximumPathSum1(root: TreeNode | null): number {
  if (root === null) {
    return -Infinity;
  }

  const maxPathSumLeft = binaryTreeMaximumPathSum1(root.left);
  const maxPathSumRight = binaryTreeMaximumPathSum1(root.right);

  const maxPathSumViaRoot =
    root.val +
    (Math.max(maxLinearPathSumFromRoot(root.left), 0) +
      Math.max(maxLinearPathSumFromRoot(root.right), 0));

  return Math.max(maxPathSumLeft, maxPathSumRight, maxPathSumViaRoot);
}

function maxLinearPathSumFromRoot(root: TreeNode | null): number {
  if (root === null) {
    return -Infinity;
  }

  const maxLinearPathSumLeft = maxLinearPathSumFromRoot(root.left);
  const maxLinearPathSumRight = maxLinearPathSumFromRoot(root.right);

  return root.val + Math.max(maxLinearPathSumLeft, maxLinearPathSumRight, 0);
}

/**
 * @param root 
 * TC = O(n)
 * SC = O(n)
 * @returns 
 */
export default function binaryTreeMaximumPathSum2(
  root: TreeNode | null
): number {
  return binaryTreeMaximumPathSumHelper(root).maxPathSum;
}

function binaryTreeMaximumPathSumHelper(
  root: TreeNode | null
): MaximumPathPair {
  if (root === null) {
    return {
      maxPathSum: -Infinity,
      maxLinearPathSumFromRoot: -Infinity,
    };
  }

  const maxPathSumLeft = binaryTreeMaximumPathSumHelper(root.left);
  const maxPathSumRight = binaryTreeMaximumPathSumHelper(root.right);

  const maxPathSumViaRoot =
    root.val +
    (Math.max(maxPathSumLeft.maxLinearPathSumFromRoot, 0) +
      Math.max(maxPathSumRight.maxLinearPathSumFromRoot, 0));

  const maxLinearPathSumFromRoot =
    root.val +
    Math.max(
      maxPathSumLeft.maxLinearPathSumFromRoot,
      maxPathSumRight.maxLinearPathSumFromRoot,
      0
    );

  const maxPathSum = Math.max(
    maxPathSumLeft.maxPathSum,
    maxPathSumRight.maxPathSum,
    maxPathSumViaRoot
  );

  return { maxPathSum, maxLinearPathSumFromRoot };
}
