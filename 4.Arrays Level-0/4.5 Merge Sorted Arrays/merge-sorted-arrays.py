# 88. Merge Sorted Array - https://leetcode.com/problems/merge-sorted-array/

#  * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
#  * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
#  * The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

# Brute force - approach - O((m+n)log(m+n))
def mergeSortedArrayBruteForce(nums1, m, nums2, n):
    nums1 = nums1[:m] + nums2
    nums1.sort()
    return nums1

print(mergeSortedArrayBruteForce([1,2,3,0,0,0],3,[2,5,6],3))
print(mergeSortedArrayBruteForce([1],1,[],0))
print(mergeSortedArrayBruteForce([2,0],1,[1],1))

# Utilising an extra space - Time Complexity :- O(m+n) , Space Complexity = O(m)
def mergeSortedArrayWithExtraSpace(nums1, m, nums2, n):
    num1_copy = nums1[:m]
    pointer1 = 0
    pointer2 = 0

    for i in range(len(nums1)):
        if (pointer1 < m and (pointer2 >= n or num1_copy[pointer1] < nums2[pointer2])):
            nums1[i] = num1_copy[pointer1]
            pointer1 += 1
        else:
            nums1[i] = nums2[pointer2]
            pointer2 += 1

    return nums1

print(mergeSortedArrayWithExtraSpace([1,2,3,0,0,0],3,[2,5,6],3))
print(mergeSortedArrayWithExtraSpace([1],1,[],0))
print(mergeSortedArrayWithExtraSpace([2,0],1,[1],1))

# Merging sorted array in place - Time Complexity :- O(m+n) , No extra space
def mergeSortedArray(nums1, m, nums2, n):
    p1 = m-1
    p2 = n-1
    
    for i in range(0,m+n-1,-1):
        if p2 < 0:
            break
        if p1 >= 0 and nums1[p1] > nums2[p2]:
            nums1[i] = nums1[p1]
            p1 -= 1
        else:
            nums1[i] = nums2[p2]
            p2 -= 1
    return nums1

print(mergeSortedArray([1,2,3,0,0,0],3,[2,5,6],3))
print(mergeSortedArray([1],1,[],0))
print(mergeSortedArray([2,0],1,[1],1))