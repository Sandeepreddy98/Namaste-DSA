/**
Recursion : A function calls itself to solve smaller version of the same problem.

2 parts of recursion:
1) Base Case : Stop condition (When to stop recursion)
2) Recursive Case : Part where function calls itself

Real life examples:
1) Queue of people
2) Comment threads (Reddit)
3) Organisational Hirerachy
**/

// print numbers from n...1
function print(num){
  if(num == 0 ) return
  console.log(num)
  num = num-1
  print(num)
}

print(5)

// Print numbers from 1...n using recursion

const n = 20
function print1ton(x){
    if(x > 20) return 
    console.log(x)
    print1ton(x+1)
}

print1ton(1)
