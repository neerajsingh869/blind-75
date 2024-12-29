/* RADIO FRAMEWORK */

/**
 * 1. R - Read & Understand (read the problem statement below)
 */

/**
 * PROBLEM: https://leetcode.com/problems/container-with-most-water/
 * 
 * You are given an integer array height of length n. 
 * There are n vertical lines drawn such that the two 
 * endpoints of the ith line are (i, 0) and (i, height[i]).

  Find two lines that together with the x-axis form a container, 
  such that the container contains the most water.

  Return the maximum amount of water a container can store.

  Notice that you may not slant the container.

  Example 1:
  Input: height = [1,8,6,2,5,4,8,3,7]
  Output: 49
  Explanation: The above vertical lines are represented by 
  array [1,8,6,2,5,4,8,3,7]. In this case, the max area of 
  water (blue section) the container can contain is 49.
  
  Example 2:
  Input: height = [1,1]
  Output: 1
  
  Constraints:
  n == height.length
  2 <= n <= 105
  0 <= height[i] <= 104
 */

/**
 * 2. A - Think about different approaches to solve the problem
 *          a) Brute force: Use 2 nested loops. Outer loop will fix
 *              one end and inner loop will move from that end onwards.
 *              In each step, calculate the current area and
 *              compare it with the variable which will store answer.
 *              Update the answer variable to whichever is larger.
 *              Keep repeating the same procedure for rest of possible cases
 *                TC = O(n * n) SC = O(1)
 *          b) Better approach: Use 2 pointers approach to solve the problem.
 *              Algorithm:
 *                - Initialize 2 variables, let's say start and end.
 *                - Point start to first element and end to last element.
 *                - Initialize one variable for storing the answer,
 *                  let's says the name is maxArea.
 *                - Calculate the length of the area occupied by
 *                  water (end - start) and breadth (min of height[start] and height[end]).
 *                  Storing the maximum of previous maxArea and current area
 *                  occupied by water (i.e length * breadth) in maxArea variable.
 *                - Once this is done, figure out if height[start] was minimum or
 *                  height[end] was minimum. If height[start] was minimum, then increment start
 *                  pointer so that area of water occupation can be increased.
 *                  Same goes for height[end], here instead of incrementing the pointer,
 *                   decrement the pointer.
 *                - Calculate the area again and repeat the process of moving
 *                  pointers till start < end.
 *                TC = O(n) SC = O(1)
 */

// 3. D -> Design the code
// 4. I -> Implement and do testing

/**
 * @param {number[]} height
 * TC = O(n * n)
 * SC = O(1)
 * @returns {number}
 */
var maxArea1 = function (height) {
  const n = height.length;

  let ans = 0;

  for (let start = 0; start < n; start++) {
    for (let end = start + 1; end < n; end++) {
      ans = Math.max(ans, (end - start) * Math.min(height[start], height[end]));
    }
  }

  return ans;
};

// 5. O -> Optimization

/**
 * @param {number[]} height
 * TC = O(n)
 * SC = O(1)
 * @return {number}
 */
var maxArea2 = function (height) {
  let n = height.length;
  let ans = -Infinity;

  let start = 0;
  let end = n - 1;
  while (start < end) {
    let length = end - start;
    let breadth = Math.min(height[start], height[end]);

    if (breadth === height[start]) {
      start++;
    } else {
      end--;
    }

    ans = Math.max(ans, length * breadth);
  }

  return ans;
};

/**
 * @param {number[]} height
 * TC = O(n)
 * SC = O(1)
 * @return {number}
 */
var maxArea3 = function (height) {
  let n = height.length;
  let ans = -Infinity;

  let start = 0;
  let end = n - 1;
  while (start < end) {
    let length = end - start;

    if (height[start] < height[end]) {
      ans = Math.max(ans, length * height[start]);
      start++;
    } else {
      ans = Math.max(ans, length * height[end]);
      end--;
    }
  }

  return ans;
};
