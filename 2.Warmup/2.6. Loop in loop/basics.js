//Nested loop
console.log("------ Nested Loop---------")
function nestedLoop(x,y){
    for(let i=0;i<x;i++){
        for(let j=0;j<y;j++){
            console.log(i,j)
        }
    }
}

nestedLoop(3,3)

//Nested loop with condition j < i
console.log("------ Nested Loop with condition j < i---------")
function conditionalNestedLoop(x,y){
    for(let i=0;i<x;i++){
        for(let j =0;j<i;j++){
            console.log(i,j)
        }
    }
}

conditionalNestedLoop(3,3)

//Nested loop with condition j < i
console.log("------ Nested Loop with condition j <= i---------")
function conditionalNestedLoop2(x,y){
    for(let i=0;i<x;i++){
        for(let j =0;j<=i;j++){
            console.log(i,j)
        }
    }
}

conditionalNestedLoop2(3,3)

//Nested loop with condition j = i; j>0;j--
console.log("------ Nested Loop with condition j = i; j>0;j-----------")
function conditionalNestedLoop2(x,y){
    for(let i=0;i<x;i++){
        for(let j =i;j>0;j--){
            console.log(i,j)
        }
    }
}

conditionalNestedLoop2(3,3)

//Nested loop with condition j = i; j>0;j--
console.log("------ Nested Loop with condition j = i; j>=0;j-----------")
function conditionalNestedLoop3(x,y){
    for(let i=0;i<x;i++){
        for(let j =i;j>=0;j--){
            console.log(i,j)
        }
    }
}

conditionalNestedLoop3(3,3)

//Nested loop with condition i=3;i>0;i-- & j=0;j<3;j++
console.log("------ Nested Loop with condition i=3;i>0;i-- & j=0;j<i;j++  -----------")
function conditionalNestedLoop3(x,y){
    for(let i=x;i>0;i--){
        for(let j =0;j<i;j++){
            console.log(i,j)
        }
    }
}

conditionalNestedLoop3(3,3)