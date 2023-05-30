def create_asterisk_lines(number):
    counter = 0
    asterisk_box = ""
    while counter < number:
        asterisk_box += f"""
        {number * '*'}"""
        counter += 1
    return asterisk_box


print(create_asterisk_lines(6))
