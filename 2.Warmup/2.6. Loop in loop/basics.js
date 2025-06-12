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