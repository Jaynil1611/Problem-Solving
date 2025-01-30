/**
 * https://www.geeksforgeeks.org/given-a-number-find-next-smallest-palindrome-larger-than-this-number/
 *
 * TC -> O(2N)
 * SC -> O(1)
 */

function getMirroredPalindrome(leftHalf, evenLength) {
  const rightHalf = evenLength
    ? leftHalf.slice().split("").reverse().join("")
    : leftHalf.slice(0, -1).split("").reverse().join("");
  return Number(leftHalf + rightHalf);
}

function nextLargestPalindrome(number) {
  const num = String(number);
  const length = num.length;
  const isEven = length % 2 === 0;

  if (/^9+$/.test(num)) {
    return number + 2;
  }

  let leftHalf = num.slice(0, Math.ceil(length / 2));
  let mirroredPalindrome = getMirroredPalindrome(leftHalf, isEven);

  if (mirroredPalindrome > number) {
    return mirroredPalindrome;
  }

  leftHalf = Number(leftHalf) + 1;
  mirroredPalindrome = getMirroredPalindrome(leftHalf.toString(), isEven);
  return mirroredPalindrome;
}

console.log(nextLargestPalindrome(7777));
