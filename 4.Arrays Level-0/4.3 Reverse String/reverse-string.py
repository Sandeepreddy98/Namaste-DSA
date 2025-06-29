#Reverse String - https://leetcode.com/problems/reverse-string/

# Write a function that reverses a string. The input string is given as an array of characters s.
# You must do this by modifying the input array in-place with O(1) extra memory.

def reverse_string(s):
    for i in range(0,int(len(s)/2)):
        temp = s[i]
        s[i] = s[len(s)-1-i]
        s[len(s)-1-i] = temp
    return s

print(reverse_string(["h", "e", "l", "l", "o"]))
print(reverse_string(["H", "a", "n", "n", "a", "h"]))