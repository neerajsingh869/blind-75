/**
 * Given a string str, determine if it is a palindrome. 
 * Return true if it is, and false otherwise.

  A string is a palindrome if, after changing all uppercase letters 
  to lowercase and discarding all non-alphanumeric characters, it 
  remains identical when read forward and backward. Alphanumeric 
  characters consist of both letters and numbers.

  Input
  str: string: A string

  Examples
  Input: str = "No 'x' in Nixon"
  Output: true
  Explanation: After removing non-alphanumeric characters and 
  converting to lowercase, the string becomes 'noxinnixon', which is a palindrome.

  Input: str = "Was it a car or a cat I saw?"
  Output: true
  Explanation: After removing non-alphanumeric characters and 
  converting to lowercase, the string becomes 'wasitacaroracatisaw', which is a palindrome.

  Input: str = "tab a cat"
  Output: false
  Explanation: After removing non-alphanumeric characters and 
  converting to lowercase, the string becomes 'tabacat', which is not a palindrome.

  Constraints
  1 <= str.length <= 1000
  The string str consists only of printable ASCII characters
 */

function isAlphanumeric(char: string): boolean {
  const charCode = char.charCodeAt(0);

  return (
    (charCode >= 48 && charCode <= 57) || // 0-9
    (charCode >= 65 && charCode <= 90) || // A-Z
    (charCode >= 97 && charCode <= 122)   // a-z
  );
}

/**
 * @param str
 * TC = O(n)
 * SC = O(n)
 * Using array to store filtered characters
 * @returns 
 */
function isStringPalindrome1(str: string): boolean {
  let strArr: string[] = [];
  str = str.toLowerCase();

  for (let ch of str) {
    if (isAlphanumeric(ch)) {
      strArr.push(ch);
    }
  }

  let start = 0;
  let end = strArr.length - 1;
  while (start < end) {
    if (strArr[start] !== strArr[end]) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}

/**
 * @param str
 * TC = O(n)
 * SC = O(n)
 * Using string to store filtered characters
 * @returns 
 */
function isStringPalindrome2(str: string): boolean {
  let filteredStr = '';

  for (let ch of str) {
    if (isAlphanumeric(ch)) {
      filteredStr += ch.toLowerCase();
    }
  }

  let start = 0;
  let end = filteredStr.length - 1;
  while (start < end) {
    if (filteredStr.charAt(start) !== filteredStr.charAt(end)) {
      return false;
    }

    start++;
    end--;
  }

  return true;
}
