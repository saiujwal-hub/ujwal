info={"sai":"90",
      "bai":"20",
      "kai":"30"}
print(info.items())
print("A - Add a student")

print("B - Update marks")
print("C - Search for a student")
print("D - Display all students and marks")
n=input("")
if("A"==n):
       name=input(("enter the name of the studentv u want to add"))
       marks=input("enter marks")
       info.update({name:marks})
elif("B"==n):

       s=input("enter the name of the student which u want to update the marks")
       for na in info:
              if(na==s):
                    
                     m1=input("enter the new marks")
                     info[na]=m1
elif("C"==n):
       g=input("enter the students name which u want to search")
       for ne in info:
              if(ne==g):
                     print("found")
elif("D"==n):
       print(info.items())                                

       
            
