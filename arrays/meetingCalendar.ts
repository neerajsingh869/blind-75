/**
 * Given an array of meeting time intervals where each element 
 * represents a meeting time as [start, end], determine whether a 
 * person can attend all the meetings without any overlap between meeting times.

  Input
  A 2D array of integers intervals of size n x 2, where n is the 
  number of meetings and each interval [start, end] represents a 
  meeting starting at time start and ending at time end

  Examples
  Input: intervals = [[83,99]]
  Output: true
  Explanation: There is only one meeting, so there is no possibility 
  of overlap.

  Input: intervals = [[1,5],[5,10],[10,15]]
  Output: true
  Explanation: The meetings are back-to-back but do not overlap.

  Input: intervals = [[8,10],[1,3],[2,6],[15,18]]
  Output: false
  Explanation: The meetings [1, 3] and [2, 6] overlap, so it is 
  not possible to attend all meetings.
  
  Constraints
  0 <= intervals.length <= 1000
  intervals[i].length == 2
  0 <= start < end <= 1,000,000
 */

/**
 * @param intervals
 * TC = O(n * n)
 * SC = O(1)
 * @returns
 */
function isMeetingCalendarValid1(intervals: number[][]): boolean {
  let n = intervals.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (isOverlap(intervals[i], intervals[j])) {
        return false;
      }
    }
  }

  return true;
}

// Helper function to check if there is overlap b/w 2 interval
function isOverlap(interval1: number[], interval2: number[]): boolean {
  return (
    (interval1[0] >= interval2[0] && interval1[0] < interval2[1]) ||
    (interval2[0] >= interval1[0] && interval2[0] < interval1[1])
  );
}

/**
 * @param intervals
 * TC = O(n * log(n))
 * SC = O(1)
 * @returns
 */
function isMeetingCalendarValid2(intervals: number[][]): boolean {
  let n = intervals.length;

  // sort the intervals on the basis of starting time
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < n; i++) {
    if (intervals[i][0] < intervals[i - 1][1]) {
      return false;
    }
  }

  return true;
}
