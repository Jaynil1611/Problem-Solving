/* Discussion Link: https://github.com/Jaynil1611/Problem-Solving/discussions/7 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  for (let i = n - 1; i >= 0; i--) {
    const lastElement = nums1[m - 1];
    let j = m - 2;
    while (j >= 0 && nums1[j] > nums2[i]) {
      nums1[j + 1] = nums1[j];
      j -= 1;
    }
    if (j != m - 2 || lastElement > nums2[i]) {
      nums1[j + 1] = nums2[i];
      nums2[i] = lastElement;
    }
  }
  let j = 0;
  for (let i = m; i < m + n; i++) {
    nums1[i] = nums2[j];
    j++;
  }
};
