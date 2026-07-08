//136. Single Number

/**Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:
Input: nums = [2,2,1]
Output: 1

Example 2:
Input: nums = [4,1,2,1,2]
Output: 4

Example 3:
Input: nums = [1]
Output: 1
**/

// Brute force approach 

var missingNumber = function(nums) {
    let n = nums.length
    let sumOfNumbers = (n * (n+1)) / 2
    console.log(sumOfNumbers)
    let sumOfElements = 0
    for(let i=0;i<nums.length;i++){
        sumOfElements = sumOfElements + nums[i]
    }
    return sumOfNumbers - sumOfElements
};

console.log(missingNumber([3,0,1]))
