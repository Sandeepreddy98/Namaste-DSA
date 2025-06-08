//Write a function that searches for an element and return the index.
console.log("----------- search an element and return index --------")
function search(arr,ele){
    for(let i =0;i<arr.length;i++){
        if(arr[i] === ele){
            return i
        }
    }
    return -1
}

console.log(search([1,2,3,4,5,6],4))

//Write a function that returns the count of negative numbers in an array
console.log("----------- returns the count of negative numbers in an array ----------")
function negativeCount(arr){
    let count = 0
    for(let i = 0;i < arr.length;i++){
        if(arr[i] < 0){
            count += 1
        }
    }
    return count
}

console.log(negativeCount([1,-9,2,-8,3,-7,4,0,-4]))

// Write the function that returns the largest element in an array.
console.log("----------- Returns the largest element ----------")
function largest(arr){
    let largestNumber = arr[0];
    for(let i = 1;i<arr.length;i++){
        if(arr[i] > largestNumber){
            largestNumber = arr[i]
        }
    }
    return largestNumber
}

console.log(largest([1,-9,2,8,3,-7,4,0,-4]))