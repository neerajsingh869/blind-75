/* RADIO FRAMEWORK */

/**
 * 1. R - Read & Understand (read the problem statement below)
 */

/**
 * PROBLEM: https://leetcode.com/problems/3sum/description/
 * 
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
 * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

  Notice that the solution set must not contain duplicate triplets.

  Example 1:
  Input: nums = [-1,0,1,2,-1,-4]
  Output: [[-1,-1,2],[-1,0,1]]
  Explanation: 
  nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
  nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
  nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
  The distinct triplets are [-1,0,1] and [-1,-1,2].
  Notice that the order of the output and the order of the triplets does not matter.
  
  Example 2:
  Input: nums = [0,1,1]
  Output: []
  Explanation: The only possible triplet does not sum up to 0.
  
  Example 3:
  Input: nums = [0,0,0]
  Output: [[0,0,0]]
  Explanation: The only possible triplet sums up to 0.

  Constraints:
  3 <= nums.length <= 3000
  -105 <= nums[i] <= 105
 */

/**
 * 2. A - Think about different approaches to solve the problem
 *          a) Brute force: Use 3 nested loops and iterate through all
 *              possible triplets to find desired answer
 *                TC = O(n * n * n) SC = O(n * n * n)
 *                
 */

// 3. D -> Design the code
// 4. I -> Implement and do testing

/**
 * @param {number[]} nums
 * TC = O(n * n * n)
 * SC = O(1)
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let n = nums.length;

  let ans = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          let temp = [nums[i], nums[j], nums[k]];
          temp.sort();
          ans.push(temp);
        }
      }
    }
  }

  // Store unique answers using JSON transformation
  let uniqueAnsSet = new Set(ans.map(JSON.stringify));
  // Parse JSON back to JavaScript array
  ans = Array.from(uniqueAnsSet).map(JSON.parse);

  return ans;
};
