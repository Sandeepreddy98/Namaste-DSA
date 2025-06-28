#Remove Element - https://leetcode.com/problems/remove-element/

#2 - pointer approach

def remove_duplicates(nums,val):
    pointer = 0
    for i in range(0,len(nums)):
        if nums[i] != val:
            nums[pointer] = nums[i]
            pointer += 1
    return pointer

print(remove_duplicates([0,1,2,2,3,0,4,2],2))