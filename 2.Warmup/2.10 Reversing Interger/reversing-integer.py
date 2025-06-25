#  Reverse Integer - https://leetcode.com/problems/reverse-integer/description/
print("------ Reverse Integer - https://leetcode.com/problems/reverse-integer/description/ ---------")

def reverse_integer(num):
    sign = -1 if num < 0 else 1
    num = sign * num
    rev = 0
    while num > 0 :
        rem = num % 10
        rev = (rev * 10) + rem
        num = int(num/10)
    return sign * rev

print(reverse_integer(-102))