# Vote eligibility
def is_eligible(age):
    if age >= 18:
        return True
    else:
        return False

eligibility = is_eligible(18)
print(eligibility)

# Even or Odd
def even_odd(num):
    if num %2 == 0:
        return f"{num} is Even"
    else:
        return f"{num} is Odd"

result = even_odd(3)
print(result)