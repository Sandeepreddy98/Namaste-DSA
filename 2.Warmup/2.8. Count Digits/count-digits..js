//Digit Sum
console.log("------ Count Digit ---------");
function countDigit(n){
    if(n === 0) { return 1}
    n = Math.abs(n)
    let counter = 0
    while(n > 0){
        n = Math.floor(n/10)
        counter++
    }
    return counter
}

console.log(countDigit(789))