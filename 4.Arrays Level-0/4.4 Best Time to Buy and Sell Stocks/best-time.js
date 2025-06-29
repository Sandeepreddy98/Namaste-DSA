//Best Time to Buy and Sell Stocks - https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
 */

function bestTime(prices){
    let min = prices[0]
    let maxProfit = 0
    for(let i = 0;i < prices.length;i++){
        if(prices[i] - min > maxProfit){
            maxProfit = prices[i] - min
        }

        if(prices[i] < min) {
            min = prices[i]
        }
    }
    return maxProfit
}

console.log(bestTime([7,1,5,3,6,4]))
console.log(bestTime([7,6,4,3,1]))