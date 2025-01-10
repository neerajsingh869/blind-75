/**
 * PRODUCT LINK: https://www.greatfrontend.com/interviews/study/blind75/questions/algo/array-smallest-in-rotated
 * 
 * Given a sorted and rotated array numbers containing unique elements, 
 * find and return the minimum element in this array.

  Rotating an array [a[0], a[1], a[2], ..., a[n-1]] once results 
  in [a[n-1], a[0], a[1], a[2], ..., a[n-2]]. Rotating it a second time 
  results in [a[n-2], a[n-1], a[0], a[1], ..., a[n-3]].

  Develop an algorithm that runs in O(log n) time complexity.

  Input
  numbers: number[]: An array of integers

  Examples
  Input: numbers = [1,2,3,4]
  Output: 1
  Explanation: The original array [1,2,3,4] was rotated 0 times

  Input: numbers = [3,4,1,2]
  Output: 1
  Explanation: The original array [1,2,3,4] was rotated 2 times

  Input: numbers = [6,7,8,-5,-4,2]
  Output: -5
  Explanation: The original array [-5,-4,2,6,7,8] was rotated 3 times.

  Constraints
  1 <= numbers.length <= 1000
  -10,000 <= numbers[i] <= 10,000
 */

/**
 * @param nums 
 * Time complexity => O(n * log(n))
 * Space complexity => O(1)
 * @returns 
 */
var findMin1 = function (nums: number[]): number {
  nums.sort();

  return nums[0];
};

/**
 * @param nums 
 * Time complexity => O(n)
 * Space complexity => O(1)
 * @returns 
 */
var findMin2 = function (nums: number[]): number {
  let min = Infinity;

  for (let i = 0; i < nums.length; i++) {
    min = Math.min(min, nums[i]);
  }

  return min;
};

/**
 * @param nums 
 * Time complexity => O(log(n))
 * Space complexity => O(1)
 * @returns 
 */
var findMin3 = function (nums: number[]): number {
  let n = nums.length;
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (
      nums[mid] <= nums[(mid + 1) % n] &&
      nums[mid] <= nums[(n + mid - 1) % n]
    ) {
      return nums[mid];
    } else if (
      (nums[mid] <= nums[high] && nums[mid] >= nums[low]) ||
      (nums[mid] <= nums[high] && nums[mid] <= nums[low])
    ) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
};

/**
 * @param nums 
 * Time complexity => O(log(n))
 * Space complexity => O(1)
 * @returns 
 */
var findMin4 = function(nums: number[]): number {
  let n = nums.length;

  let low = 0;
  let high = n - 1;
  let ans = Infinity;

  while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);

      // if left part is sorted
      if (nums[low] <= nums[mid]) {
          // Keep the minimum:
          ans = Math.min(ans, nums[low]);

          // Eliminate left half:
          low = mid + 1;
      } else {  // if right part is sorted
          // Keep the minimum:
          ans = Math.min(ans, nums[mid]);

          // Eliminate right half:
          high = mid - 1;
      }
  }

  return ans;
};

/**
 * @param nums 
 * Time complexity => O(log(n))
 * Space complexity => O(1)
 * @returns 
 */
var findMin5 = function(nums: number[]): number {
  let n = nums.length;

  let low = 0;
  let high = n - 1;
  let ans = Infinity;

  while (low <= high) {
      let mid = low + Math.floor((high - low) / 2);

      // search space is already sorted
      // then nums[low] will always be
      // the minimum in that search space:
      if (nums[high] >= nums[low]) {
        ans = Math.min(ans, nums[low]);
        break;
      }

      // if left part is sorted
      if (nums[low] <= nums[mid]) {
          // Keep the minimum:
          ans = Math.min(ans, nums[low]);
          
          // Eliminate left half:
          low = mid + 1;
      } else {  // if right part is sorted
          // Keep the minimum:
          ans = Math.min(ans, nums[mid]);
          
          // Eliminate right half:
          high = mid - 1;
      }
  }

  return ans;
};
