/**
 * RADIO framework
 *  R => Read & Understand
 *  A => Approaches (+ Intuition)
 *  D => Design algorithms (Exact steps)
 *  I => Implemention (Writing code & testing)
 *  O => Optimizations (if any)
 */

/**
 * Given a non-negative integer n, write a function that takes the 
 * non-negative integer n and return an array result of size n + 1 
 * where result[i] represents the number of active bits (set bits to 1) 
 * in the binary representation of the integer i (where 0 <= i <= n).

  Input
  n: number: An integer
  
  Examples
  Input: n = 1
  Output: [0,1]
  Explanation: The number of set bits in 0 (binary: 0) is 0, 
  and in 1 (binary: 1) is 1.
  
  Input: n = 2
  Output: [0,1,1]
  Explanation: The number of set bits in 0 (binary: 0) is 0, 
  in 1 (binary: 1) is 1, and in 2 (binary: 10) is 1.
  
  Input: n = 3
  Output: [0,1,1,2]
  Explanation: The number of set bits in 0 (binary: 0) is 0, 
  in 1 (binary: 1) is 1, in 2 (binary: 10) is 1, and in 3 (binary: 11) is 2.
  
  Constraints
  0 <= n <= 10,000
 */

/**
 * @param n 
 * TC = O(n * log(no. of digits))
 * SC = O(n)
 * @returns 
 */
function bitCounting1(n: number): number[] {
  let bitCounts: number[] = new Array(n + 1).fill(0);

  for (let i = 0; i <= n; i++) {
    bitCounts[i] = getSetBitCount(i);
  }

  return bitCounts;
}

function getSetBitCount(n: number): number {
  let count = 0;

  while (n > 0) {
    count += n & 1;
    n >>>= 1;
  }

  return count;
}

/**
 * @param n 
 * TC = O(n)
 * SC = O(n)
 * @returns 
 */
function bitCounting2(n: number): number[] {
  let bitCounts: number[] = new Array(n + 1).fill(0);
  
  let x = 0;
  let b = 1;
  while (b <= n) {
    while (x < b && (x + b) <= n) {
      bitCounts[x + b] = bitCounts[x] + 1;
      x++;
    }
    
    x = 0;
    b <<= 1;
  }

  return bitCounts;
}

/**
 * @param n 
 * TC = O(n)
 * SC = O(n)
 * @returns 
 */
function bitCounting3(n: number): number[] {
  let bitCounts: number[] = new Array(n + 1).fill(0);
  
  for (let i = 1; i <= n; i++) {
    const leastSignificantBit = i & 1;
    /**
     * INTUITION: Number of 1s in number i can be derived from
     * number of 1s in number i/2 (right shifted value of i)
     * and the least significant bit of i
     */
    bitCounts[i] = bitCounts[Math.floor(i / 2)] + leastSignificantBit;
  }

  return bitCounts;
}