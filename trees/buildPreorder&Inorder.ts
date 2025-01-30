/**
 * PROBLEM LINK: https://www.greatfrontend.com/interviews/study/blind75/questions/algo/binary-tree-rebuilding-from-traversals
 * 
 * Given two arrays of integers, preorder and inorder, 
 * where preorder represents the values of a preorder 
 * traversal of a binary tree, and inorder represents 
 * the values of an inorder traversal of the same tree, 
 * construct and return the binary tree from these traversals.

  Input
  preorder: number[]: An array of positive integers
  inorder: number[]: An array of positive integers

  Examples
  Input: preorder = [3,1,2,6,5,9], inorder = [1,2,3,5,6,9]
  Output: [3,1,6,null,2,5,9]
  Explanation: The root is 3, with left subtree [1, 2] and right subtree [6, 5, 9].

  Input: preorder = [1,2,3], inorder = [3,2,1]
  Output: [1,2,null,3]
  Explanation: The root is 1, with left subtree [2, 3] and no right subtree.
  
  Input: preorder = [7], inorder = [7]
  Output: [7]
  Explanation: The tree consists of a single node with the 
  value 7, which is both the root and the only node.

  Constraints
  1 <= Number of nodes <= 1000
  1 <= TreeNode.val <= 1,000,000
  preorder and inorder contain unique values
 */

interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

/**
 * @param preorder
 * @param inorder
 * TC = O(n * n)
 * SC = O(h)
 * @returns
 */
function binaryTreeRebuildingFromTraversals1(
  preorder: number[],
  inorder: number[]
): TreeNode | null {
  const n = preorder.length;
  const m = inorder.length;

  if (n != m) return null;

  return buildBinaryTree1(preorder, 0, n - 1, inorder, 0, m - 1);
}

function buildBinaryTree1(
  preorder: number[],
  preStart: number,
  preEnd: number,
  inorder: number[],
  inStart: number,
  inEnd: number
): TreeNode | null {
  if (preStart > preEnd || inStart > inEnd) {
    return null;
  }

  const rootValue = preorder[preStart];

  let rootInorderIndex = inStart;
  for (let i = inStart; i <= inEnd; i++) {
    if (inorder[i] === rootValue) {
      rootInorderIndex = i;
      break;
    }
  }

  const root: TreeNode = { val: rootValue, left: null, right: null };

  root.left = buildBinaryTree1(
    preorder,
    preStart + 1,
    preStart + rootInorderIndex - inStart,
    inorder,
    inStart,
    rootInorderIndex - 1
  );

  root.right = buildBinaryTree1(
    preorder,
    preStart + rootInorderIndex - inStart + 1,
    preEnd,
    inorder,
    rootInorderIndex + 1,
    inEnd
  );

  return root;
}

/**
 * @param preorder
 * @param inorder
 * TC = O(n)
 * SC = O(n)
 * @returns
 */
function binaryTreeRebuildingFromTraversals2(
  preorder: number[],
  inorder: number[]
): TreeNode | null {
  const n = preorder.length;
  const m = inorder.length;

  if (n != m) return null;

  const map = new Map<number, number>();
  for (let i = 0; i < m; i++) {
    map.set(inorder[i], i);
  }

  return buildBinaryTree2(preorder, 0, n - 1, inorder, 0, m - 1, map);
}

function buildBinaryTree2(
  preorder: number[],
  preStart: number,
  preEnd: number,
  inorder: number[],
  inStart: number,
  inEnd: number,
  map: Map<number, number>
): TreeNode | null {
  if (preStart > preEnd || inStart > inEnd) {
    return null;
  }

  const rootValue = preorder[preStart];
  const rootInorderIndex = Number(map.get(rootValue));

  const root: TreeNode = { val: rootValue, left: null, right: null };

  root.left = buildBinaryTree2(
    preorder,
    preStart + 1,
    preStart + rootInorderIndex - inStart,
    inorder,
    inStart,
    rootInorderIndex - 1,
    map
  );

  root.right = buildBinaryTree2(
    preorder,
    preStart + rootInorderIndex - inStart + 1,
    preEnd,
    inorder,
    rootInorderIndex + 1,
    inEnd,
    map
  );

  return root;
}
