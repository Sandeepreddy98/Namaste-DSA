// 88. Merge Sorted Array - https://leetcode.com/problems/merge-sorted-array/

/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 */
function mergeSortedArrayBruteForce(nums1, m, nums2, n){
    nums1 = [...nums1.slice(0,m),...nums2]
    return nums1.sort((a,b) => a-b)
}

console.log(mergeSortedArrayBruteForce([1,2,3,0,0,0],3,[2,5,6],3))
console.log(mergeSortedArrayBruteForce([1],1,[],0))
console.log(mergeSortedArrayBruteForce([2,0],1,[1],1))

function mergeSortedArray(nums1, m, nums2, n){
    const num1Copy = nums1.slice(0,m)
    let pointer1 = 0
    let pointer2 = 0
    for(let i=0;i < nums1.length;i++){
        if((pointer1 < m && num1Copy[pointer1] < nums2[pointer2]) || pointer2 >= n){
            nums1[i] = num1Copy[pointer1]
            pointer1++
        }else if(nums2.length){
            nums1[i] = nums2[pointer2]
            pointer2++
        }
    }
    return nums1
}

console.log(mergeSortedArray([1,2,3,0,0,0],3,[2,5,6],3))
console.log(mergeSortedArray([1],1,[],0))
console.log(mergeSortedArray([2,0],1,[1],1))