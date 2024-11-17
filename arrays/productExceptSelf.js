/**
 * Given an integer array nums, return an array answer such that answer[i] 
 * is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

Constraints:
2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

Follow up: Can you solve the problem in O(1) extra space complexity? 
(The output array does not count as extra space for space complexity analysis.)
 */
/**
 * @param {number[]} nums
 * Time complexity => O(n * n)
 * Space complexity => O(1)
 * @return {number[]}
 */
var productExceptSelf1 = function(nums) {
  let n = nums.length;
  let ans = [];
  
  for (let i = 0; i < n; i++) {
      let tempVar = 1;

      for (let j = 0; j < n; j++) {
          if (i != j) {
              tempVar *= nums[j];
          }
      }

      ans.push(tempVar);
  }

  return ans;
};

/**
 * @param {number[]} nums
 * Time complexity => O(n)
 * Space complexity => O(1) {ignore the output}
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  let n = nums.length;
  let ans = [];

  let tempVar = 1;
  for (let i = 0; i < n; i++) {
      ans.push(tempVar);
      tempVar *= nums[i]; 
  }

  tempVar = 1;
  for (let i = n - 1; i >= 0; i--) {
      ans[i] *= tempVar;
      tempVar *= nums[i];
  }

  return ans;
};