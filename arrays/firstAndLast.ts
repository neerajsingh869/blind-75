/**
 * PROBLEM LINK: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 * 
 * Given an array of integers nums sorted in non-decreasing order, 
 * find the starting and ending position of a given target value.

  If target is not found in the array, return [-1, -1].

  You must write an algorithm with O(log n) runtime complexity.

  Example 1:
  Input: nums = [5,7,7,8,8,10], target = 8
  Output: [3,4]

  Example 2:
  Input: nums = [5,7,7,8,8,10], target = 6
  Output: [-1,-1]

  Example 3:
  Input: nums = [], target = 0
  Output: [-1,-1]

  Constraints:
  0 <= nums.length <= 105
  -109 <= nums[i] <= 109
  nums is a non-decreasing array.
  -109 <= target <= 109
 */

/**
 * @param nums
 * @param target
 * TC = O(n)
 * SC = O(1)
 * @returns
 */
function searchRange1(nums: number[], target: number): number[] {
  const n = nums.length;

  let firstIndex = -1;
  let lastIndex = -1;

  for (let i = 0; i < n; i++) {
    if (nums[i] === target) {
      if (firstIndex === -1) {
        firstIndex = i;
      }

      lastIndex = i;
    }
  }

  return [firstIndex, lastIndex];
}

/**
 * @param nums
 * @param target
 * TC = O(log(n))
 * SC = O(1)
 * @returns
 */
function searchRange2(nums: number[], target: number): number[] {
  const n = nums.length;

  let firstIndex = -1;
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    if (nums[mid] >= target) {
      if (nums[mid] === target) {
        firstIndex = mid;
      }

      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  let lastIndex = -1;
  low = 0;
  high = n - 1;

  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    if (nums[mid] <= target) {
      if (nums[mid] === target) {
        lastIndex = mid;
      }

      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return [firstIndex, lastIndex];
}
