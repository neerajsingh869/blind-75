/**
 * PROBLEM LINK: https://www.greatfrontend.com/interviews/study/blind75/questions/algo/maximum-water-between-walls
 * 
 * Given an array walls of wall heights, calculate the maximum volume 
 * of water that will be trapped between two walls and the x-axis after 
 * a heavy downpour.

  Input
  walls: number[]: An array of integers

  Examples
  Input: walls = [1,4,2,3]
  Output: 6
  Explanation: Consider two walls (i=1 & i=3) with heights 4 and 3. 
  The water is limited by the shorter wall with height 3, so the container 
  holds 2 (distance) * 3 (shorter height) = 6 units. All other combination of 
  walls result in smaller area.

  Input: walls = [1,1]
  Output: 1
  Explanation: Consider two walls (i=0 & i=1) with heights 1 and 1. 
  The water is limited by the shorter wall (both same in this case i.e. 1), 
  so the container holds 1 (distance) * 1 (shorter height) = 1 unit
  
  Input: walls = [1,0]
  Output: 0
  Explanation: Consider two walls (i=0 & i=1) with heights 1 and 0. 
  The water is limited by the shorter wall with height 0, so the container 
  holds 1 (distance) * 0 (shorter height) = 0 unit

  Constraints
  2 <= walls.length <= 1000
  0 <= walls[i] <= 10,000
 */

/**
 * @param height
 * TC = O(n * n)
 * SC = O(1)
 * @returns
 */
var maxArea1 = function (height: number[]): number {
  const n = height.length;

  let ans = 0;

  for (let start = 0; start < n; start++) {
    for (let end = start + 1; end < n; end++) {
      let currentArea = Math.min(height[start], height[end]) * (end - start);
      ans = Math.max(ans, currentArea);
    }
  }

  return ans;
};

/**
 * @param height
 * TC = O(n)
 * SC = O(1)
 * @returns
 */
var maxArea2 = function (height: number[]): number {
  let n = height.length;
  let ans = -Infinity;

  let start = 0;
  let end = n - 1;
  while (start < end) {
    let currentArea = Math.min(height[start], height[end]) * (end - start);
    ans = Math.max(ans, currentArea);

    if (height[start] < height[end]) {
      start++;
    } else {
      end--;
    }
  }

  return ans;
};
