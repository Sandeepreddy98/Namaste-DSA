# Create a function to find the second largest using sorting. 
def second_largest_sorting(list):
    sorted_list = list.sort()
    return sorted_list[len(sorted_list) - 2]



