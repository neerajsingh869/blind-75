/* RADIO FRAMEWORK */

/**
 * 1. R - Read & Understand (read the problem statement below)
 */

/**
 * PROBLEM: https://leetcode.com/problems/search-in-rotated-sorted-array/
 * 
 * There is an integer array nums sorted in ascending order (with distinct values).

  Prior to being passed to your function, nums is possibly rotated at 
  an unknown pivot index k (1 <= k < nums.length) such that the resulting 
  array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]
   (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 
   and become [4,5,6,7,0,1,2].

  Given the array nums after the possible rotation and an integer target, 
  return the index of target if it is in nums, or -1 if it is not in nums.

  You must write an algorithm with O(log n) runtime complexity.

  Example 1:
  Input: nums = [4,5,6,7,0,1,2], target = 0
  Output: 4

  Example 2:
  Input: nums = [4,5,6,7,0,1,2], target = 3
  Output: -1

  Example 3:
  Input: nums = [1], target = 0
  Output: -1

  Constraints:
  1 <= nums.length <= 5000
  -104 <= nums[i] <= 104
  All values of nums are unique.
  nums is an ascending array that is possibly rotated.
  -104 <= target <= 104
 */

/**
 * 2. A - Think about different approaches to solve the problem
 *          a) Use linear search to find the target element and
 *             return its index. If there is no such element, then
 *             just return -1.
 *                TC = O(n) SC = O(1)
 *          b) Use binary search to find the target element and
 *             return its index. If there is no such element, then
 *             just return -1.
 *             Algorithm:
 *                - If the array is not rotated, then use simple BS
 *                - If the array is rotated, follow below:
 *                      - Figure out where is target (whether it is
 *                        in starting before pivot, or after pivot)
 *                      - Once you know where is target, compare it
 *                        with middle element to eliminate one half
 *                TC = O(log(n)) SC = O(1)
 */

// 3. D -> Design the code
// 4. I -> Implement and do testing

/**
 * @param {number[]} nums
 * @param {number} target
 * TC = O(log(n))
 * SC = O(1)
 * @return {number}
 */
var search1 = function (nums, target) {
  let n = nums.length;
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    // Array is not rotated
    if (nums[high] >= nums[low]) {
      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] > target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else {
      // Array is rotated
      // Target is before the pivot
      if (target >= nums[low]) {
        if (nums[low] === target) {
          return low;
        } else if (nums[mid] === target) {
          return mid;
        } else if (nums[mid] >= nums[low] && nums[mid] < target) {
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      } else {
        // Target is after the pivot
        if (nums[high] === target) {
          return high;
        } else if (nums[mid] === target) {
          return mid;
        } else if (nums[mid] <= nums[high] && nums[mid] > target) {
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      }
    }
  }

  return -1;
};

// 5. O -> Optimization

/**
 * @param {number[]} nums
 * @param {number} target
 * TC = O(log(n))
 * SC = O(1)
 * @return {number}
 */
var search2 = function (nums, target) {
  let n = nums.length;
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    // Target is before the pivot
    if (target >= nums[low]) {
      if (nums[low] === target) {
        return low;
      } else if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] >= nums[low] && nums[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    } else {
      // Target is after the pivot
      if (nums[high] === target) {
        return high;
      } else if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] <= nums[high] && nums[mid] > target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }

  return -1;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * TC = O(log(n))
 * SC = O(1)
 * @return {number}
 */
var search3 = function (nums, target) {
  let n = nums.length;
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    // Target is before the pivot
    if (target >= nums[low]) {
      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] >= nums[low] && nums[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    } else {
      // Target is after the pivot
      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] <= nums[high] && nums[mid] > target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }

  return -1;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * TC = O(log(n))
 * SC = O(1)
 * @return {number}
 */
var search = function (nums, target) {
  let n = nums.length;
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // Target is before the pivot
    if (target >= nums[low]) {
      if (nums[mid] >= nums[low] && nums[mid] < target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    } else {
      // Target is after the pivot
      if (nums[mid] <= nums[high] && nums[mid] > target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  }

  return -1;
};

/**
 * REFERENCES: https://takeuforward.org/data-structure/search-element-in-a-rotated-sorted-array/
 */
