#Write a function that searches for an element and return the index.
print("----------- search an element and return index --------")
def search_list(list,ele):
    for i in range(0,len(list)):
        if list[i] == ele:
            return i
    return -1

print(search_list([1,2,3,4,5,6,7],8))

#Write a function that returns the count of negative numbers in an array
print("----------- search an element and return index ----------")
def negative_count(list):
    count = 0
    for i in range(0,len(list)):
        if list[i] < 0:
            count += 1
    return count

print(negative_count([1,-9,2,-8,3,-7,4,0,-4]))

#Write the function that returns the largest element in an array.
print("----------- Returns the largest element ----------")
def largest(list):
    largest_number = list[1]
    for i in range(1,len(list)):
        if list[i] > largest_number:
            largest_number = list[i]
    return largest_number

print(largest([1,-9,2,8,3,-7,4,0,-4]))

# Write the function that returns the smallest element in an array.
print("----------- Returns the smallest element ----------")
def smallest(list):
    smallest_number = list[0]
    for i in range(1,len(list)):
        if list[i] < smallest_number:
            smallest_number = list[i]
    return smallest_number

print(smallest([1,-9,2,8,3,-7,4,0,-4]))