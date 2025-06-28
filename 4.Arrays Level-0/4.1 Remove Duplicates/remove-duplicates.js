// Remove Duplicates from Sorted Array - https://leetcode.com/problems/remove-duplicates-from-sorted-array/

// 2 - pointer approach
function removeDuplicates(nums){
    let pointer = 0
    for(let i =0;i < nums.length;i++){
        if(nums[pointer] < nums[i]){
            pointer ++
            nums[pointer] = nums[i]
        }
    }
    return pointer+1
}

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))
