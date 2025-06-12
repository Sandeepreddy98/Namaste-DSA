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