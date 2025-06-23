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

//Star Pattern - Right Angled Triangle
console.log("------ Star Pattern - Right Angled Triangle ---------")

function rightTrianglePattern(n){
    let pattern = ''
    for(let i=0;i<n;i++){
        let row = ''
        for(let j =0;j<=i;j++){
            row += "*"
        }
        pattern += row +(i !== n-1 ? "\n" : '')
    }
    return pattern
}

console.log(rightTrianglePattern(4))

// Number Pattern - Right Angled Increment
console.log("------ Number Pattern - Right Angled Increment ---------")

function rightAngledNumberIncrement(n){
    let pattern = ''
    for(let i = 1;i<= n;i++){
        let row = ''
        for (let j=1;j<=i;j++){
            row += j
        }
        pattern += row + (i !== n ? "\n" : '')
    }
    return pattern
}

console.log(rightAngledNumberIncrement(4))

// Number Pattern - Right Angled Increment
console.log("------ Number Pattern - Right Angled Incremental Y-axis ---------")

function rightAngledIncrementYAxis(n){
    let pattern = ''
    for(let i=1;i<=n;i++){
        let row = ''
        for(let j=1;j<=i;j++){
            row += i
        }
        pattern += row + (i !== n ? "\n" : '')
    }
    return pattern
}

console.log(rightAngledIncrementYAxis(4))

// Number Pattern - Right Angled Increment - Inverted
console.log("------ Number Pattern - Right Angled Increment - Inverted ---------")

function rightAngledNumberIncrementInverted(n){
    let pattern = ""
    for(let i=1;i<=n;i++){
        let row = ''
        for(let j = 1;j<=n-i+1;j++){
            row += j
        }
        pattern += row + (i !== n ? "\n" : '')
    }
    return pattern
}

console.log(rightAngledNumberIncrementInverted(4))

//Star Pattern - Right Angled Triangle - Inverted
console.log("------ Star Pattern - Right Angled Triangle- Inverted ---------")

function rightTrianglePatternInverted(n){
    let pattern = ''
    for(let i=0;i<n;i++){
        let row = ''
        for(let j =0;j<n-i;j++){
            row += "*"
        }
        pattern += row +(i !== n-1 ? "\n" : '')
    }
    return pattern
}

console.log(rightTrianglePatternInverted(4))