/* RADIO FRAMEWORK */

/**
 * PROBLEM: https://www.greatfrontend.com/interviews/study/blind75/questions/algo/triplet-sum
 * 
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
 * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

  Notice that the solution set must not contain duplicate triplets.

  Example 1:
  Input: nums = [-1,0,1,2,-1,-4]
  Output: [[-1,-1,2],[-1,0,1]]
  Explanation: 
  nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
  nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
  nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
  The distinct triplets are [-1,0,1] and [-1,-1,2].
  Notice that the order of the output and the order of the triplets does not matter.
  
  Example 2:
  Input: nums = [0,1,1]
  Output: []
  Explanation: The only possible triplet does not sum up to 0.
  
  Example 3:
  Input: nums = [0,0,0]
  Output: [[0,0,0]]
  Explanation: The only possible triplet sums up to 0.

  Constraints:
  3 <= nums.length <= 3000
  -105 <= nums[i] <= 105
 */

/**
 * NOTE: By default, JavaScript's Array.prototype.sort method does lexical sorting
 * so it may generate incorrect results in case of number arrays. So, we have to
 * use comparator function (a, b) => a - b to sort the array in ascending order
 */

/**
 * @param nums
 * TC = O(n * n * n)
 * SC = O(n * n * n)
 * @returns
 */
const threeSum1 = function (nums: number[]): number[][] {
  let n = nums.length;

  let ans: number[][] = [];
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          let temp = [nums[i], nums[j], nums[k]];
          temp.sort((a, b) => a - b);
          ans.push(temp);
        }
      }
    }
  }

  // Store unique answers using JSON transformation
  let uniqueAnsSet = new Set(ans.map((ele) => JSON.stringify(ele)));
  // Parse JSON back to JavaScript array
  ans = Array.from(uniqueAnsSet).map((ele) => JSON.parse(ele));

  return ans;
};

// Two sum function
function twoSum(nums: number[], low: number, target: number): number[][] {
  let high = nums.length - 1;

  let result: number[][] = [];
  while (low < high) {
    if (target > 0) {
      high--;
    } else if (target < 0) {
      low++;
    } else {
      // Found a valid triplet
      result.push([-target, nums[low], nums[high]]);
      low++;
      high--;

      // Skip duplicates for nums[low] and nums[high]
      while (low < high && nums[low] === nums[low - 1]) {
        low++;
      }
      while (low < high && nums[high] === nums[high + 1]) {
        high--;
      }
    }
  }

  return result;
}

/**
 * @param nums 
 * TC = O(n * n)
 * SC = O(n) because of sorting
 * @returns 
 */
const threeSum3 = function (nums: number[]): number[][] {
  // Sort the array
  nums.sort((a, b) => a - b);
  const n = nums.length;

  const result: number[][] = [];
  // Traverse the array
  for (let i = 0; i < n - 2; i++) {
    // Early termination: if nums[i] > 0, no triplet can sum to 0
    if (nums[i] > 0) {
      break;
    }

    // Skip duplicates for nums[i]
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    // Use two pointers to find answer that includes current number
    const tempAns = twoSum(nums, i + 1, -nums[i]);

    result.push(...tempAns);
  }

  return result;
}

/**
 * @param nums 
 * TC = O(n * n)
 * SC = O(n) because of sorting
 * @returns 
 */
const threeSum4 = function (nums: number[]): number[][] {
  // Sort the array
  nums.sort((a, b) => a - b);
  const n = nums.length;

  const result: number[][] = [];
  // Traverse the array
  for (let i = 0; i < n - 2; i++) {
    // Early termination: if nums[i] > 0, no triplet can sum to 0
    if (nums[i] > 0) {
      break;
    }

    // Skip duplicates for nums[i]
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    /**
     * Create Inner function to implement
     * two pointers approach
     * 
     * NOTE: The function will be re-defined everytime
     * the loop runs so it is not optimal approach to 
     * implement two pointers approach using function
     */
    function twoSum() {
      let low = i + 1;
      let high = nums.length - 1;
    
      while (low < high) {
        const total = nums[i] + nums[low] + nums[high];

        if (total > 0) {
          high--;
        } else if (total < 0) {
          low++;
        } else {
          // Found a valid triplet
          result.push([nums[i], nums[low], nums[high]]);
          low++;
          high--;
    
          // Skip duplicates for nums[low] and nums[high]
          while (low < high && nums[low] === nums[low - 1]) {
            low++;
          }
          while (low < high && nums[high] === nums[high + 1]) {
            high--;
          }
        }
      }
    }

    twoSum();
  }

  return result;
}

/**
 * @param nums 
 * TC = O(n * n)
 * SC = O(n) because of sorting
 * BEST APPROACH
 * @returns 
 */
const threeSum2 = function (nums: number[]): number[][] {
  // Sort the array
  nums.sort((a, b) => a - b);
  const result: number[][] = [];
  const n = nums.length;

  // Iterate through the array
  for (let i = 0; i < n - 2; i++) {
    // If the current number is greater than 0, break the loop (no valid triplets possible)
    if (nums[i] > 0) {
      break;
    }

    // Skip duplicate values for the current number
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    // Use two-pointer technique
    let low = i + 1,
      high = n - 1;
    while (low < high) {
      const total = nums[i] + nums[low] + nums[high];

      if (total < 0) {
        low++;
      } else if (total > 0) {
        high--;
      } else {
        // Found a triplet
        result.push([nums[i], nums[low], nums[high]]);
        low++;
        high--;

        // Skip duplicates for low and high pointers
        while (low < high && nums[low] === nums[low - 1]) {
          low++;
        }
        while (low < high && nums[high] === nums[high + 1]) {
          high--;
        }
      }
    }
  }

  return result;
};
