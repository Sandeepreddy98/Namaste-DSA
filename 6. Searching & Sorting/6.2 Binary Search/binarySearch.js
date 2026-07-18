function binarySearch(arr,target){
    let start = 0
    let end = arr.length-1
    let middle = Math.floor((start+end)/2)

    while(start >= end){
        if(target === arr[middle]){
            return middle
        }else if(target > middle){
            start = middle+1
        }else{
            end = middle -1
        }
    }
}

console.log(binarySearch([-1,0,3,5,9,12],9))