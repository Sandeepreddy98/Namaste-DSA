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

var singleNumber = function(nums) {
    let hash = {}
    for(let i=0;i<nums.length;i++){
        if(hash[nums[i]]){
            hash[nums[i]] = hash[nums[i]] + 1
        }else{
            hash[nums[i]] = 1
        }
    }
    let keysArray = Object.keys(hash)
    for(let i=0;i<keysArray.length;i++){
        if(hash[keysArray[i]] === 1){
            return parseInt(keysArray[i])
        }
    }
};
