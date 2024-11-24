/**
  Given an integer array nums, find the 
  subarray
  with the largest sum, and return its sum.

  Example 1:
  Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
  Output: 6
  Explanation: The subarray [4,-1,2,1] has the largest sum 6.

  Example 2:
  Input: nums = [1]
  Output: 1
  Explanation: The subarray [1] has the largest sum 1.

  Example 3:
  Input: nums = [5,4,-1,7,8]
  Output: 23
  Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

  Constraints:
  1 <= nums.length <= 105
  -104 <= nums[i] <= 104

  Follow up: If you have figured out the O(n) solution, try coding 
  another solution using the divide and conquer approach, which is more subtle.
 */
/**
 * @param {number[]} nums
 * Time complexity => O(n * n * n)
 * Space complexity => O(1)
 * @return {number}
 */
var maxSubArray1 = function(nums) {
    let n = nums.length;
    let maxSubArraySum = Number.MIN_SAFE_INTEGER;
    
    for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
        let subArraySum = 0;

        for (let k = i; k <= j; k++) {
          subArraySum += nums[k];
        }

        maxSubArraySum = Math.max(maxSubArraySum, subArraySum);
      }
    }

    return maxSubArraySum;
};

/**
 * @param {number[]} nums
 * Time complexity => O(n * n)
 * Space complexity => O(1)
 * @return {number}
 */
var maxSubArray2 = function(nums) {
  let n = nums.length;
  let maxSubArraySum = Number.MIN_SAFE_INTEGER;
  
  for (let i = 0; i < n; i++) {
    let subArraySum = 0;

    for (let j = i; j < n; j++) {
      subArraySum += nums[j];
      maxSubArraySum = Math.max(maxSubArraySum, subArraySum);
    }
  }

  return maxSubArraySum;
};

/**
 * @param {number[]} nums
 * Time complexity => O(n)
 * Space complexity => O(1)
 * @return {number}
 */
var maxSubArray3 = function(nums) {
  let n = nums.length;
  let maxSubArraySum = Number.MIN_SAFE_INTEGER;
  let tempSum = 0;
  
  for (let i = 0; i < n; i++) {
    tempSum += nums[i];

    if (tempSum > maxSubArraySum) {
      maxSubArraySum = tempSum;
    }

    if (tempSum < 0) {
      tempSum = 0;
    }
  }

  return maxSubArraySum;
};