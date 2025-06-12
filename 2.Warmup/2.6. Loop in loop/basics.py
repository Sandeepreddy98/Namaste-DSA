# Nested loop
print("------ Nested Loop---------")
def nested_loop(x,y):
    for i in range(0,x):
        for j in range(0,y):
            print(i,j)

nested_loop(3,3)

# Nested loop with condition j < i
print("------ Nested Loop with condition j < i---------")
def conditionalNestedLoop(x,y):
    for i in range(0,x):
        for j in range(0,i):
            print(i,j)
        
conditionalNestedLoop(3,3)

# Nested loop with condition j <= i
print("------ Nested Loop with condition j <= i---------")
def conditionalNestedLoop2(x,y):
    for i in range(0,x):
        for j in range(0,i+1):
            print(i,j)
        
conditionalNestedLoop2(3,3)

# Nested loop with condition j = i; j>0;j
print("------ Nested Loop with condition j = i; j>0;j---------")
def conditionalNestedLoop2(x,y):
    for i in range(0,x):
        for j in range(i,0,-1):
            print(i,j)
        
conditionalNestedLoop2(3,3)

# Nested loop with condition j = i; j>=0;j
print("------ Nested Loop with condition j = i; j>=0;j---------")
def conditionalNestedLoop2(x,y):
    for i in range(0,x):
        for j in range(i,-1,-1):
            print(i,j)
        
conditionalNestedLoop2(3,3)
