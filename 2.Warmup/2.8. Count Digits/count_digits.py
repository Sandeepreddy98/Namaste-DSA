# Digit Count
print("------ Count Digit ---------")

def digit_count(num):
    if num == 0 :
        return 1
    sign = -1 if num <0 else 1
    num = sign * num
    counter = 0
    while(num > 0):
        num = int(num/10)
        counter += 1
    return counter

print(digit_count(789))