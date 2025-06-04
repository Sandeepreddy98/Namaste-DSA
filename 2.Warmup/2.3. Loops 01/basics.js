// Print numbers from 0 to 10
console.log("-----------------------")
for (let i = 0;i<=10;i++){
    console.log("Hello World " + i)
}

// Print even numbers from 0-10
console.log("-----------------------")
for(let i = 0;i<=10;i =i+2){
    console.log("Hello World " + i)
}

// Print numbers from 10-1
console.log("-----------------------")
for(let i = 10;i>0;i--){
    console.log("Hello World " + i)
}

// Print the items in the array
console.log("----------- Print the items in the array --------")
const arr = [1,2,3,4,5,6,7,8]
for(let i = 0;i < arr.length ;i++){
    console.log(arr[i])
}

// Print only even items in the array
console.log("----------- Print only even items in the array --------")
for(let i = 0;i < arr.length ;i++){
    if(arr[i] %2 === 0){
        console.log(arr[i])
    }
}

// Print numbers from 0 to 10 using while
console.log("--------- Print numbers from 0 to 10 using while --------------")
let i = 0
while(i <=10){
    console.log(i)
    i++
}

// Print numbers from 10-1 using while
console.log("---------- Print numbers from 10-1 using while -------------")
let j = 10
while(j>0){
    console.log(j)
    j--
}