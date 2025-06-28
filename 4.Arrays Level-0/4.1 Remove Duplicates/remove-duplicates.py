# Remove Duplicates from Sorted Array - https://leetcode.com/problems/remove-duplicates-from-sorted-array/
# 2 - pointer approach

def remove_duplicates(nums):
    pointer = 0
    for i in range(0,len(nums)):
        if nums[i] > nums[pointer]:
            pointer += 1
            nums[pointer] = nums[i]
    return pointer + 1

print(remove_duplicates([0,0,1,1,1,2,2,3,3,4]))