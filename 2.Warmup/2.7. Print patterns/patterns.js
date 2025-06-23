//Star Pattern - square
console.log("------ Star Pattern - square ---------")

function starSquare(n){
    let pattern = ''
    for(let i = 0;i<n;i++){
        row = ''
        for(let j =0;j<n;j++){
            row += '*'
        }
        pattern = pattern + row + (i !== n-1 ? "\n" : '')
    }
    return pattern
}

console.log(starSquare(4))