# Create a function to find the second largest using sorting. 
def second_largest_sorting(list):
    list.sort()
    return list[len(list) - 2]

print(second_largest_sorting([1,-9,2,8,3,-7,4,0,-4]))

# Create a function to find the second largest element in a list without using sorting.
def second_largest_without_sort(list):
    first_largest = list[0]
    second_largest = list[0]
    for i in range(1,len(list)):
        if list[i] > first_largest:
            second_largest = first_largest
            first_largest = list[i]
        elif list[i] > second_largest:
            second_largest = list[i]
    return second_largest

print(second_largest_without_sort([1,-9,2,8,3,-7,4,0,-4]))