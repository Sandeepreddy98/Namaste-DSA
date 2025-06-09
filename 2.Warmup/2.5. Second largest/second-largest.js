function secondLargestUsingSort(arr){
    // using sort
    const sortedArr = arr.sort((a,b) => a-b)
    console.log(sortedArr);
    
    return sortedArr[sortedArr.length-2]
}

console.log(secondLargestUsingSort([1,-9,2,8,3,-7,4,0,-4]))