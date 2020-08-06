print ("karthik is sick")
print  ("needs energy")

# string comparision
text1 = "karthik"
text2 = "karthik"

print(text1 == text2)

# string slicing

print(text2[0])
print(text1[3])
print (text1[0:4])  # end index exclusive

# x = int(input("Enter x"))
# print (x+6)

# lists
alist = ["karthik", "raj", "lakshan"]
alist.append("mani")
print (alist)

alist.sort()
print (alist)
alist.reverse()
print (alist)

def equals(a, b):
    # if statement
    if a != text2:  #text2 is global scope
        print ("two string are not equal")  # atleast one space is required, else python throws error
    else:
        print ("two strings are equal")

equals("karthik", "text2")

equals("kk", "kk")

rng = range(0, 10, 2) # generates range from 0 to 10 with interval of 2
print (rng)

# tuple (can declare multiple variables)
x,y,z,a = (3,4,5,6)
print(x)

a = False
if not a:
    print('hi')
