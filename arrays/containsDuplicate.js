/**
 * Given an integer array nums, return true if any value appears 
 * at least twice in the array, and return false if every element 
 * is distinct.

  Example 1:
  Input: nums = [1,2,3,1]
  Output: true
  Explanation:
  The element 1 occurs at the indices 0 and 3.

  Example 2:
  Input: nums = [1,2,3,4]
  Output: false
  Explanation:
  All elements are distinct.

  Example 3:
  Input: nums = [1,1,1,3,3,4,3,2,4,2]
  Output: true

  Constraints:
  1 <= nums.length <= 105
  -109 <= nums[i] <= 109
  */

/**
 * @param {number[]} nums
 * Time complexity => O(n * n)
 * Space complexity => O(1)
 * @return {boolean}
 */
var containsDuplicate1 = function (nums) {
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] === nums[j]) return true;
    }
  }

  return false;
};

/**
 * @param {number[]} nums
 * Time complexity => O(n * log(n))
 * Space complexity => O(1)
 * @return {boolean}
 */
var containsDuplicate2 = function (nums) {
  let n = nums.length;
  nums.sort();

  for (let i = 1; i < n; i++) {
    if (nums[i] === nums[i - 1]) return true;
  }

  return false;
};

/**
 * @param {number[]} nums
 * Time complexity => O(n)
 * Space complexity => O(n)
 * @return {boolean}
 */
var containsDuplicate3 = function (nums) {
  let n = nums.length;
  let set = new Set();

  for (let i = 0; i < n; i++) {
    if (set.has(nums[i])) return true;

    set.add(nums[i]);
  }

  return false;
};
