def get_arithmetic_average(numbers):
    total = 0
    for number in numbers:
        total += number
    return total / len(numbers)


print(get_arithmetic_average([1, 2, 3, 4, 5, 6]))
