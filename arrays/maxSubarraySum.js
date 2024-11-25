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
var maxSubArray1 = function (nums) {
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
var maxSubArray2 = function (nums) {
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
var maxSubArray3 = function (nums) {
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

/**
 * @param {number[]} nums
 * Kadane's algorithm
 * Time complexity => O(n)
 * Space complexity => O(1)
 * @return {number}
 */
var maxSubArray4 = function (nums) {
  if (nums.length === 0) return 0;

  let maxSum = nums[0]; // Keeps track of global maxima
  let currentSum = nums[0]; // Keeps track of local maxima

  for (let i = 1; i < nums.length; i++) {
    // At each step, we have two choices:
    // 1. Add current element to existing subarray
    // 2. Start a new subarray from current element
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};

/**
 * @param {number[]} nums
 * Kadane's algorithm
 * Time complexity => O(n log n)
 * Space complexity => O(1)
 * @return {number}
 */
var maxSubArray5 = function (nums) {
  return divideAndConquer(nums, 0, nums.length - 1);
};

function divideAndConquer(nums, left, right) {
  if (left === right) return nums[left];

  const mid = Math.floor((left + right) / 2);

  // Find maximum crossing sum
  let leftSum = -Infinity;
  let sum = 0;
  for (let i = mid; i >= left; i--) {
    sum += nums[i];
    leftSum = Math.max(leftSum, sum);
  }

  let rightSum = -Infinity;
  sum = 0;
  for (let i = mid + 1; i <= right; i++) {
    sum += nums[i];
    rightSum = Math.max(rightSum, sum);
  }

  // Return maximum of:
  // 1. Maximum subarray sum in left half
  // 2. Maximum subarray sum in right half
  // 3. Maximum crossing sum
  return Math.max(
    divideAndConquer(nums, left, mid),
    divideAndConquer(nums, mid + 1, right),
    leftSum + rightSum
  );
}

/**
 * @param {number[]} nums
 * Problem Extension: Return subarray and not the sum
 * Kadane's algorithm
 * Time complexity => O(n)
 * Space complexity => O(1)
 * @return {number}
 */
function maxArrayWithIndices(nums) {
  if (nums.length === 0) return [];

  // Initialization
  let maxSum = nums[0]; // Stores the global maximum sum found so far
  let currentSum = nums[0]; // Stores the local sum of the current subarray being evaluated
  let start = 0; // Tracks the starting index of the subarray with the maximum sum
  let end = 0; // Tracks the ending index of the subarray with the maximum sum
  let tempStart = 0; // Tracks the starting index of the current subarray being evaluated

  for (let i = 1; i < nums.length; i++) {
    if (currentSum + nums[i] < nums[i]) {
      tempStart = i; // Start a new subarray from index i
      currentSum = nums[i];
    } else {
      currentSum = currentSum + nums[i]; // Extend the current subarray
    }

    if (maxSum < currentSum) {
      maxSum = currentSum; // Update the global maximum sum
      start = tempStart; // Update the starting index of the max subarray
      end = i; // Update the ending index of the max subarray
    }
  }

  return nums.slice(start, end + 1);
}
