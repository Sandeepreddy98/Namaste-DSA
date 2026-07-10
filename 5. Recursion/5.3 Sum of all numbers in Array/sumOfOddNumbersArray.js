// Create a function that returns sum of all numbers in an array

function sumofOddElements(arr){
    if(arr.length == 1) {
        return arr[0]%2!=0 ? arr[0] : 0
    }
    return (arr[arr.length-1]%2 !=0 ? arr[arr.length-1]:0) + sumofOddElements(arr.slice(0,arr.length-1))
}

console.log(sumofOddElements([1,2,3,4,5,6,7]))
