/**
 * Given an integer array nums, find a subarray that has the 
 * largest product, and return the product.

  The test cases are generated so that the answer will fit in a 32-bit integer.

  Example 1:
  Input: nums = [2,3,-2,4]
  Output: 6
  Explanation: [2,3] has the largest product 6.

  Example 2:
  Input: nums = [-2,0,-1]
  Output: 0
  Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

  Constraints:
  1 <= nums.length <= 2 * 104
  -10 <= nums[i] <= 10
  The product of any subarray of nums is guaranteed to fit in a 32-bit integer.
 */
/**
 * @param {number[]} nums
 * Time complexity => O(n * n * n)
 * Space complexity => O(1)
 * @return {number}
 */
var maxProduct1 = function (nums) {
  let ans = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      let tempProduct = 1;

      for (let k = i; k <= j; k++) {
        tempProduct *= nums[k];
      }

      ans = Math.max(ans, tempProduct);
    }
  }

  return ans;
};

/**
 * @param {number[]} nums
 * Time complexity => O(n * n)
 * Space complexity => O(1)
 * @return {number}
 */
var maxProduct2 = function (nums) {
  let ans = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    let tempProduct = 1;
    for (let j = i; j < nums.length; j++) {
      tempProduct *= nums[j];

      ans = Math.max(ans, tempProduct);
    }
  }

  return ans;
};

/**
 * @param {number[]} nums
 * Time complexity => O(n)
 * Space complexity => O(1)
 * REF: https://takeuforward.org/data-structure/maximum-product-subarray-in-an-array/
 * @return {number}
 */
var maxProduct3 = function (nums) {
  let ans = -Infinity;

  let prefixProd = 1;
  let suffixProd = 1;
  for (let i = 0; i < nums.length; i++) {
    if (prefixProd === 0) prefixProd = 1;
    if (suffixProd === 0) suffixProd = 1;

    prefixProd *= nums[i];
    suffixProd *= nums[nums.length - 1 - i];

    ans = Math.max(ans, prefixProd, suffixProd);
  }

  return ans;
};

/**
 * @param {number[]} nums
 * Time complexity => O(n)
 * Space complexity => O(1)
 * KEY IDEA: Track both the maximum product and minimum product at
 * each index because a negative number can flip the result.
 * @return {number}
 */
var maxProduct4 = function (nums) {
  let ans = -Infinity;

  let maxSoFar = nums[0];
  let minSoFar = nums[0];
  ans = maxSoFar;
  for (let i = 1; i < nums.length; i++) {
    let currentEle = nums[i];

    let tempMax = Math.max(
      currentEle,
      currentEle * maxSoFar,
      currentEle * minSoFar
    );
    let tempMin = Math.min(
      currentEle,
      currentEle * maxSoFar,
      currentEle * minSoFar
    );

    maxSoFar = tempMax;
    minSoFar = tempMin;

    ans = Math.max(ans, maxSoFar);
  }

  return ans;
};
