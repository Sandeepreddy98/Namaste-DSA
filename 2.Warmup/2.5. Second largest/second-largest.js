function secondLargestUsingSort(arr){
    // using sort
    const sortedArr = arr.sort((a,b) => a-b)
    console.log(sortedArr);
    
    return sortedArr[sortedArr.length-2]
}

console.log(secondLargestUsingSort([1,-9,2,8,3,-7,4,0,-4]))

function secondLargest(arr){
    let firstLargest = arr[0]
    let secondLargestEle = arr[0]
    for(let i=1;i<arr.length;i++){
        if(arr[i] > firstLargest){
            secondLargestEle = firstLargest
            firstLargest = arr[i]
        }else if (arr[i] > secondLargestEle){
            secondLargestEle = arr[i]
        }
    }
    return secondLargestEle
}

console.log(secondLargest([1,-9,2,8,3,-7,4,0,-4]))