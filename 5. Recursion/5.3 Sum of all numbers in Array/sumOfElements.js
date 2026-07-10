// Create a function that returns sum of elements in an array 

function sumOfElemets(arr){
    if(arr.length == 1) return arr[0]
    return arr[arr.length-1] + sumOfElemets(arr.slice(0,arr.length-1))
}

console.log(sumOfElemets([1,2,3,4]))
