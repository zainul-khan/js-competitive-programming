num = 5

print("ALLSTARS")
for i in range(1, num + 1):
    str_ = ""  # Reset the string for each row
    for j in range(1, num + 1):
        str_ += "*"  # Add one star per column
    print(str_)  # Print the full row

print("HALFPYRAMIDSTARS")
str2 = ""
for i in range(1, num + 1):
    str2 += "*"
    print(str2)

print("HALFPYRAMIDNUMBERS")
str3 = ""
for i in range(1, num + 1):
    str3 += str(i)
    print(str3)

print("HALFPYRAMIDSAMEROWNUMBERS")
for i in range(1, num + 1):
    str_ = ""
    for j in range(1, i + 1):
        str_ += str(i)  # Add one number per column
    print(str_)

print("REVERSESTARS")
for i in range(num, 0, -1):
    str4 = ""  # Reset the string for each row
    for j in range(1, i + 1):
        str4 += "*"  # Add one star per column
    print(str4)
