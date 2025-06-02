//Vote eligibility
function is_eligible(age){
    if (age >= 18){
        return true
    }else{
        return false
    }
}

const eligibility = is_eligible(20)
console.log(eligibility)

//Even or Odd
function even_odd(num){
    if(num %2 === 0){
        return num+" is Even"
    }else{
        return num +" is Odd"
    }
}

const result = even_odd(0)
console.log(result)