/**
 * Given a non-negative integer x, return the square root of x 
 * rounded down to the nearest integer. The returned integer 
 * should be non-negative as well.

  You must not use any built-in exponent function or operator.

  For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

  Example 1:
  Input: x = 4
  Output: 2
  Explanation: The square root of 4 is 2, so we return 2.

  Example 2:
  Input: x = 8
  Output: 2
  Explanation: The square root of 8 is 2.82842..., and since 
  we round it down to the nearest integer, 2 is returned.

  Constraints:
  0 <= x <= 231 - 1
 */

/**
 * @param x
 * TC = O(x)
 * SC = O(1)
 * @returns
 */
function mySqrt1(x: number): number {
  if (x < 2) return x; // Handle edge cases for 0 and 1

  let ans = 1;

  for (let num = 1; num <= x; num++) {
    if (num === Math.max(x / num)) {
      // or (mid * mid === x)
      return num;
    } else if (num < Math.max(x / num)) {
      // or (mid * mid < x)
      ans = num;
    } else {
      break;
    }
  }

  return ans;
}

/**
 * @param x
 * TC = O(log(x))
 * SC = O(1)
 * Similar to finding last position of element in
 * sorted array problem (with little twist)
 * @returns
 */
function mySqrt2(x: number): number {
  if (x < 2) return x; // Handle edge cases for 0 and 1

  let ans = 1;

  let low = 1;
  let high = x;
  while (low <= high) {
    const mid = low + Math.floor((high - low) / 2);

    /** Shorter way (little less readable) */
    // if (mid <= Math.floor(x / mid)) {
    //   if (mid === Math.floor(x / mid)) {
    //     return mid;
    //   }

    //   ans = mid;
    //   low = mid + 1;
    // } else {
    //   high = mid - 1;
    // }

    /** Little longer way (but more readable) */
    if (mid === Math.floor(x / mid)) {
      // or (mid * mid === x)
      return mid;
    } else if (mid < Math.floor(x / mid)) {
      // or (mid * mid < x)
      ans = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return ans;
}
