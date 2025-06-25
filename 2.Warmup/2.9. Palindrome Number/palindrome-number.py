# Palindrome number - https://leetcode.com/problems/palindrome-number/description/
print("------ Palindrome number - https://leetcode.com/problems/palindrome-number/description/ ---------")

def palindrome_number(num):
    sign = -1 if num < 0 else 1
    num_copy = num
    num = sign * num
    rev = 0
    while num > 0:
        rem = num % 10
        rev = (rev * 10) + rem
        num = int(num/10)
    return rev == num_copy

print(palindrome_number(121))
print(palindrome_number(-121))
print(palindrome_number(123))