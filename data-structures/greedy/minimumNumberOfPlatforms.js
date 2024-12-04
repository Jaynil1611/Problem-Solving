/**
 * https://takeuforward.org/data-structure/minimum-number-of-platforms-required-for-a-railway/
 * TC -> O(NlogN) + O(N)
 * SC -> O(1)
 */

function findMinimumPlatforms(arrival, departure) {
  const n = arrival.length;
  let i = 0;
  let j = 0;
  let platforms = 0;
  let result = 0;

  arrival.sort((a, b) => a - b);
  departure.sort((a, b) => a - b);

  while (i < n) {
    if (arrival[i] < departure[j]) {
      platforms += 1;
      i++;
    } else {
      platforms -= 1;
      j++;
    }
    result = Math.max(result, platforms);
  }
  return result;
}

const arrival = [900, 945, 955, 1100, 1500, 1800];
const departure = [920, 1200, 1130, 1150, 1900, 2000];
console.log(findMinimumPlatforms(arrival, departure));
