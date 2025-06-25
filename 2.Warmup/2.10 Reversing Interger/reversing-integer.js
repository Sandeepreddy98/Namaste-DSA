// Reverse Integer - https://leetcode.com/problems/reverse-integer/description/
console.log("------ Reverse Integer - https://leetcode.com/problems/reverse-integer/description/ ---------");

function reverseInteger(num){
    const sign = Math.sign(num)
    num = sign * num
    let rev = 0
    while(num > 0){
        let rem = num % 10
        rev = (rev * 10) + rem
        num = Math.floor(num/10)
    }
    let limit = Math.pow(2,31)
    if(rev > limit || rev < -limit){
        return 0
    }
    return sign * rev
}

console.log(reverseInteger(123));
console.log(reverseInteger(-123));
