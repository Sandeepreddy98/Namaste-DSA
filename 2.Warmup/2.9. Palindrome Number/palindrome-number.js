//Palindrome number - https://leetcode.com/problems/palindrome-number/description/
console.log("------ Palindrome number - https://leetcode.com/problems/palindrome-number/description/ ---------");

function palindromeNumber(num){
    let sign = Math.sign(num)
    let initial_num = num
    num = sign * num
    let final = 0
    while(num > 0){
        let remainder = num % 10
        final = final * 10 + remainder
        num = Math.floor(num/10)
    }
    return (final) === initial_num
}

console.log(palindromeNumber(121))
console.log(palindromeNumber(-121))
console.log(palindromeNumber(123))