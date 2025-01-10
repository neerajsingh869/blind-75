/**
 * PROBLEM LINK: https://www.greatfrontend.com/interviews/study/blind75/questions/algo/array-maximum-sum-contiguous
 * 
 * Given an array of integers numbers, determine the subarray 
 * that has the highest sum and return that sum.

  A subarray is a contiguous segment of an array where all elements 
  are taken from consecutive indices, preserving their order, 
  such as [2, 3] in [1, 2, 3, 4], while non-contiguous selections 
  like [1, 3] are not valid subarray.

  Input
  numbers: number[]: An array of integers

  Examples
  Input: numbers = [-1,5,-3,9,-11]
  Output: 11
  Explanation: The subarray [5, -3, 9] has the largest sum i.e 11.

  Input: numbers = [9]
  Output: 9
  Explanation: The single-element subarray [9] has the largest sum i.e 9.

  Input: numbers = [1,2,3,4]
  Output: 10
  Explanation: The subarray [1,2,3,4] has the largest sum i.e 10.
  
  Constraints
  1 <= numbers.length <= 10,000
  -10,000 <= numbers[i] <= 10,000
 */

/**
 * @param nums 
 * Time complexity => O(n * n * n)
 * Space complexity => O(1)
 * @returns 
 */
var maxSubArray1 = function (nums: number[]): number {
  let n = nums.length;
  let maxSubArraySum = -Infinity;

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
 * @param nums 
 * Time complexity => O(n * n)
 * Space complexity => O(1)
 * @returns 
 */
var maxSubArray2 = function (nums: number[]): number {
  let n = nums.length;
  let maxSubArraySum = -Infinity;

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
 * @param nums 
 * Time complexity => O(n)
 * Space complexity => O(1)
 * @returns 
 */
var maxSubArray3 = function (nums: number[]): number {
  let n = nums.length;
  let maxSubArraySum = -Infinity;
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
 * @param nums 
 * Time complexity => O(n)
 * Space complexity => O(1)
 * @returns 
 */
var maxSubArray4 = function (nums: number[]): number {
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
 * @param nums 
 * Time complexity => O(n * log(n))
 * Space complexity => O(log(n))
 * @returns 
 */
var maxSubArray5 = function (nums: number[]): number {
  return divideAndConquer(nums, 0, nums.length - 1);
};

function divideAndConquer(nums, left, right) {
  if (left > right) return -Infinity;

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
 * @param nums 
 * Problem Extension: Return subarray and not the sum
 * Kadane's algorithm
 * Time complexity => O(n)
 * Space complexity => O(1)
 * @returns 
 */
function maxArrayWithIndices(nums: number[]): number[] {
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
