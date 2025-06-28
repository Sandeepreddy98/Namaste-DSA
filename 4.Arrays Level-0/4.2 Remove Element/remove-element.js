//Remove Element - https://leetcode.com/problems/remove-element/

// 2 - pointer approach

function removeElement(nums,val){
    let pointer = 0
    for(let i=0;i<nums.length;i++){
        if(nums[i] != val){
            nums[pointer] = nums[i]
            pointer++
        }
    }
    return pointer
}

console.log(removeElement([0,1,2,2,3,0,4,2],2))