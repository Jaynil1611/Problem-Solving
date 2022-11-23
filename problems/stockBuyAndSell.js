// Discussion Link: https://github.com/Jaynil1611/Problem-Solving/discussions/6

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const arrLength = prices.length
    let maxProfit = 0
    if(arrLength === 1){
        return maxProfit
    }
    let buyingValue = prices[0]
    for(let i = 1; i < arrLength; i++){
        if(prices[i] > buyingValue){
            profit = prices[i] - buyingValue
            maxProfit = Math.max(maxProfit, profit)
        } else if(prices[i] < buyingValue){
            buyingValue = prices[i]
        }
    }
    return maxProfit
};