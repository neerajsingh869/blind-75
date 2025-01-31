/**
 * PROBLEM LINK: https://www.greatfrontend.com/interviews/study/blind75/questions/algo/longest-common-subsequence
 * 
 * Given two strings, str1 and str2, find the length of 
 * their longest common subsequence. If no common subsequence e
 * xists, return 0.

  A subsequence is a sequence derived from another sequence by 
  deleting some or no elements without changing the order of 
  the remaining elements. For example, the subsequences of 
  abc are ``, a, b, c, ab, ac, bc, and abc.

  A common subsequence between two strings refers to a subsequence
  that appears in both string sequences in the same relative order. 
  For example, in the strings xyz and axabz, the longest common 
  subsequence is xz, and therefore, the length of the longest 
  common subsequence is 2.

  Input
  str1: string: A string
  str2: string: A string

  Examples
  Input: str1 = "xyz", str2 = "axabz"
  Output: 2
  Explanation: The longest common subsequence is 'xz'.

  Input: str1 = "xyz", str2 = "xyz"
  Output: 3
  Explanation: The longest common subsequence is 'xyz'.

  Input: str1 = "xyz", str2 = "pqr"
  Output: 0
  Explanation: There is no common subsequence.
  
  Constraints
  1 <= str1.length, str2.length <= 1000
  str1 and str2 consist of only lowercase English characters
 */

/**
 * @param str1
 * @param str2
 * TC = Exponential
 * SC = O(n + m)
 * @returns
 */
function longestCommonSubsequence1(str1: string, str2: string): number {
  let n = str1.length;
  let m = str2.length;

  function lcsHelper(str1Index: number, str2Index: number): number {
    if (str1Index >= n || str2Index >= m) {
      return 0;
    }

    if (str1[str1Index] === str2[str2Index]) {
      const excludeFirstBoth = 1 + lcsHelper(str1Index + 1, str2Index + 1);

      return excludeFirstBoth;
    } else {
      const excludeFirstStr1 = lcsHelper(str1Index + 1, str2Index);
      const excludeFirstStr2 = lcsHelper(str1Index, str2Index + 1);

      return Math.max(excludeFirstStr1, excludeFirstStr2);
    }
  }

  return lcsHelper(0, 0);
}

/**
 * @param str1
 * @param str2
 * TC = O(n * m)
 * SC = O(n * m)
 * @returns
 */
function longestCommonSubsequence2(str1: string, str2: string): number {
  let n = str1.length;
  let m = str2.length;

  let memoizedDp: number[][] = new Array(n)
    .fill(0)
    .map(() => new Array(m).fill(-1));

  function lcsHelper(str1Index: number, str2Index: number): number {
    if (str1Index >= n || str2Index >= m) {
      return 0;
    }

    if (memoizedDp[str1Index][str2Index] != -1) {
      return memoizedDp[str1Index][str2Index];
    }

    if (str1[str1Index] === str2[str2Index]) {
      const excludeFirstBoth = 1 + lcsHelper(str1Index + 1, str2Index + 1);

      return (memoizedDp[str1Index][str2Index] = excludeFirstBoth);
    } else {
      const excludeFirstStr1 = lcsHelper(str1Index + 1, str2Index);
      const excludeFirstStr2 = lcsHelper(str1Index, str2Index + 1);

      return (memoizedDp[str1Index][str2Index] = Math.max(
        excludeFirstStr1,
        excludeFirstStr2
      ));
    }
  }

  return lcsHelper(0, 0);
}

/**
 * @param str1
 * @param str2
 * TC = O(n * m)
 * SC = O(n * m)
 * @returns
 */
function longestCommonSubsequence3(str1: string, str2: string): number {
  let n = str1.length;
  let m = str2.length;

  // Fill 0 which will work as base case later
  let dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));

  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      // dp[i][j] = lcs of str1 (i...n-1) and str2 (j...m-1)
      if (str1[i] == str2[j]) {
        dp[i][j] = 1 + dp[i + 1][j + 1];
      } else {
        dp[i][j] = Math.max(dp[i][j + 1], dp[i + 1][j]);
      }
    }
  }

  return dp[0][0];
}

/**
 * @param str1
 * @param str2
 * TC = O(n * m)
 * SC = O(n * m)
 * @returns
 */
function longestCommonSubsequence4(str1: string, str2: string): number {
  let n = str1.length;
  let m = str2.length;

  // Fill 0 which will work as base case later
  let dp = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      // dp[i][j] = lcs of str1 (length i i.e 0...i-1) and str2 (length j i.e 0...j-1)
      if (str1[i - 1] == str2[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);
      }
    }
  }

  return dp[n][m];
}
