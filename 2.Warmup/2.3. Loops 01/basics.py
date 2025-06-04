# Print numbers from 0 to 10 exculding 10
print("---------- Print numbers from 0 to 10 exculding 10 -------------")
for i in range(0,11):
    print(f"Hello World {i}")

# Print even numbers from 0-10
print("--------- Print even numbers from 0-10 --------------")
for i in range(0,11,2):
    print(f"Hello World {i}")

#Print numbers from 10-1
print("---------- Print numbers from 10-1 -------------")
for i in range(10,0,-1):
    print(f"Hello World {i}")

# Print the items in the array
print("----------- Print the items in the array --------")
arr = [1,2,3,4,5,6,7,8,9]
for i in range(0,len(arr)):
    print(i)

# Print only even items in the array
print("----------- Print only even items in the array --------")
for i in range(0,len(arr)):
    if arr[i] %2 == 0:
        print(arr[i])

# Print numbers from 0 to 10 exculding 10 using while loop
print("---------- Print numbers from 0 to 10 exculding 10 using while loop-------------")
i = 0
while i<11:
    print(i)
    i = i + 1

# Print even numbers from 0-10 using while loop
print("--------- Print numbers from 10-1 using while loop --------------")
j = 10
while j > 0:
    print(j)
    j = j-1