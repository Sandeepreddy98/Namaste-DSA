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