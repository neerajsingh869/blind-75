/**
 * Suppose an array of length n sorted in ascending order is 
 * rotated between 1 and n times. For example, 
 * the array nums = [0,1,2,4,5,6,7] might become:

    [4,5,6,7,0,1,2] if it was rotated 4 times.
    [0,1,2,4,5,6,7] if it was rotated 7 times.
    Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 
    1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

  Given the sorted rotated array nums of unique elements, 
  return the minimum element of this array.

  You must write an algorithm that runs in O(log n) time.
  
  Example 1:
  Input: nums = [3,4,5,1,2]
  Output: 1
  Explanation: The original array was [1,2,3,4,5] rotated 3 times.

  Example 2:
  Input: nums = [4,5,6,7,0,1,2]
  Output: 0
  Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

  Example 3:
  Input: nums = [11,13,15,17]
  Output: 11
  Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 

  Constraints:
  n == nums.length
  1 <= n <= 5000
  -5000 <= nums[i] <= 5000
  All the integers of nums are unique.
  nums is sorted and rotated between 1 and n times.
 */
/**
 * @param {number[]} nums
 * Time complexity => O(n * log(n))
 * Space complexity => O(1)
 * @return {number}
 */
var findMin1 = function (nums) {
  nums.sort();

  return nums[0];
};

/**
 * @param {number[]} nums
 * Time complexity => O(n)
 * Space complexity => O(1)
 * @return {number}
 */
var findMin2 = function (nums) {
  let min = Infinity;

  for (let i = 0; i < nums.length; i++) {
    min = Math.min(min, nums[i]);
  }

  return min;
};

/**
 * @param {number[]} nums
 * Time complexity => O(log(n))
 * Space complexity => O(1)
 * @return {number}
 */
var findMin3 = function (nums) {
  let n = nums.length;
  let start = 0;
  let end = n - 1;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (
      nums[mid] <= nums[(mid + 1) % n] &&
      nums[mid] <= nums[(n + mid - 1) % n]
    ) {
      return nums[mid];
    } else if (
      (nums[mid] <= nums[end] && nums[mid] >= nums[start]) ||
      (nums[mid] <= nums[end] && nums[mid] <= nums[start])
    ) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1;
};

/**
 * @param {number[]} nums
 * Time complexity => O(log(n))
 * Space complexity => O(1)
 * Reference: https://takeuforward.org/data-structure/minimum-in-rotated-sorted-array/
 * @return {number}
 */
var findMin4 = function(nums) {
  let n = nums.length;

  let start = 0;
  let end = n - 1;
  let ans = Infinity;

  while (start <= end) {
      let mid = start + Math.floor((end - start) / 2);

      // if left part is sorted
      if (nums[start] <= nums[mid]) {
          // Keep the minimum:
          ans = Math.min(ans, nums[start]);

          // Eliminate left half:
          start = mid + 1;
      } else {  // if right part is sorted
          // Keep the minimum:
          ans = Math.min(ans, nums[mid]);

          // Eliminate right half:
          end = mid - 1;
      }
  }

  return ans;
};

/**
 * @param {number[]} nums
 * Time complexity => O(log(n))
 * Space complexity => O(1)
 * Reference: https://takeuforward.org/data-structure/minimum-in-rotated-sorted-array/
 * @return {number}
 */
var findMin5 = function(nums) {
  let n = nums.length;

  let start = 0;
  let end = n - 1;
  let ans = Infinity;

  while (start <= end) {
      let mid = start + Math.floor((end - start) / 2);

      // search space is already sorted
      // then nums[start] will always be
      // the minimum in that search space:
      if (nums[end] >= nums[start]) {
        ans = Math.min(ans, nums[start]);
        break;
      }

      // if left part is sorted
      if (nums[start] <= nums[mid]) {
          // Keep the minimum:
          ans = Math.min(ans, nums[start]);
          
          // Eliminate left half:
          start = mid + 1;
      } else {  // if right part is sorted
          // Keep the minimum:
          ans = Math.min(ans, nums[mid]);
          
          // Eliminate right half:
          end = mid - 1;
      }
  }

  return ans;
};
