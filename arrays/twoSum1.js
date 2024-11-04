/**
 * Given an array of integers nums and an integer target, return 
 * indices of the two numbers such that they add up to target.

  You may assume that each input would have exactly one solution, 
  and you may not use the same element twice.

  You can return the answer in any order.

  Example 1:
  Input: nums = [2,7,11,15], target = 9
  Output: [0,1]
  Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

  Example 2:
  Input: nums = [3,2,4], target = 6
  Output: [1,2]

  Example 3:
  Input: nums = [3,3], target = 6
  Output: [0,1]

  Constraints:

  2 <= nums.length <= 104
  -109 <= nums[i] <= 109
  -109 <= target <= 109
  Only one valid answer exists.
  

  Follow-up: Can you come up with an algorithm that is less 
  than O(n2) time complexity?
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * Time complexity => O(n * n)
 * Space complexity => O(1)
 * @return {number[]}
 */
var twoSum1 = function (nums, target) {
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return null;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * Time complexity => O(n * log(n))
 * Space complexity => O(n)
 * @return {number[]}
 */
var twoSum2 = function (nums, target) {
  let pairArr = [];
  let n = nums.length;

  for (let i = 0; i < n; i++) {
    let temp = [nums[i], i];

    pairArr.push(temp);
  }

  // conditionally sort ans array on the basis of first element
  pairArr.sort((a, b) => a[0] - b[0]);

  let first = 0;
  let second = n - 1;
  while (first < second) {
    if (pairArr[first][0] + pairArr[second][0] === target) {
      return [pairArr[first][1], pairArr[second][1]];
    } else if (pairArr[first][0] + pairArr[second][0] >= target) {
      second--;
    } else {
      first++;
    }
  }

  return null;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * Time complexity => O(n)
 * Space complexity => O(n)
 * @return {number[]}
 */
var twoSum3 = function (nums, target) {
  let n = nums.length;

  let map = new Map();
  for (let i = 0; i < n; i++) {
    map.set(nums[i], i);
  }

  for (let i = 0; i < n; i++) {
    if (map.has(target - nums[i]) && i != map.get(target - nums[i])) {
      return [i, map.get(target - nums[i])];
    }
  }

  return null;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * Time complexity => O(n)
 * Space complexity => O(n)
 * @return {number[]}
 */
var twoSum4 = function (nums, target) {
  // edge cases
  if (!nums || nums.length < 2 || !target) {
    throw new Error("Invalid input");
  }

  let n = nums.length;

  let map = new Map();
  for (let i = 0; i < n; i++) {
    let complement = target - nums[i];

    if (map.has(complement)) {
      return [i, map.get(complement)];
    }

    map.set(nums[i], i);
  }

  return null;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * Time complexity => O(n)
 * Space complexity => O(n)
 * @return {number[]}
 */
// duplicate numbers possible
var twoSumDuplicate = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (map.has(complement)) {
      // return all solutions
      const pairs = [];
      map.get(complement).forEach((index) => {
        pairs.push([index, i]);
      });
      return pairs;
    }

    if (!map.get(nums[i])) {
      map.set(nums[i], []);
    }
    map.get(nums[i]).push(i);
  }

  return null;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * Time complexity => O(n)
 * Space complexity => O(n)
 * @return {number[][]}
 */
// return all solutions
var twoSumAllSolutions = function (nums, target) {
  let map = new Map();
  let allSolutions = [];

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];

    if (map.has(complement)) {
      map.get(complement).forEach((index) => {
        allSolutions.push([index, i]);
      });
    }

    if (!map.get(nums[i])) {
      map.set(nums[i], []);
    }
    map.get(nums[i]).push(i);
  }

  return allSolutions;
};

/**
 * @param {number[]} nums
 * @param {number} target
 * Time complexity => O(n)
 * Space complexity => O(n)
 * @return {number[][]}
 */
// sorted array optimization
var twoSumSorted = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let total = nums[left] + nums[right];

    if (total === target) {
      return [left, right];
    } else if (total > target) {
      right--;
    } else {
      left++;
    }
  }

  return null;
};
