/**
 * https://takeuforward.org/data-structure/buy-and-sell-stocks-with-cooldown-dp-39/
 * TC -> O(N)
 * SC -> O(N)
 */

function bestTimeToBuyStocksWithCooldown(array) {
  const n = array.length;

  const dp = Array.from({ length: n + 2 }, () => new Array(2).fill(0));
  dp[n][0] = 0;
  dp[n][1] = 0;

  for (let ind = n - 1; ind >= 0; ind--) {
    dp[ind][1] = Math.max(-array[ind] + dp[ind + 1][0], 0 + dp[ind + 1][1]);

    dp[ind][0] = Math.max(array[ind] + dp[ind + 2][1], 0 + dp[ind + 1][0]);
  }
  return dp[0][1];
}

function bestTimeToBuyStocksII(array) {
  const n = array.length;

  const dp = Array.from({ length: n + 1 }, () => new Array(2).fill(0));
  dp[n][0] = 0;
  dp[n][1] = 0;

  for (let ind = n - 1; ind >= 0; ind--) {
    for (let buy = 0; buy <= 1; buy++) {
      if (buy) {
        dp[ind][buy] = Math.max(
          -array[ind] + dp[ind + 1][0],
          0 + dp[ind + 1][1]
        );
      } else {
        dp[ind][buy] = Math.max(
          array[ind] + dp[ind + 1][1],
          0 + dp[ind + 1][0]
        );
      }
    }
  }
  return dp[0][1];
}

const input = [4, 9, 0, 4, 10];
const input2 = [7, 1, 5, 3, 6, 4];
console.log(bestTimeToBuyStocksWithCooldown(input));
