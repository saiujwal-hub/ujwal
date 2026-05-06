n=int(input("enter the number of elements for list 1\n"))
s1=[]  
a=0
for i in range(n):
    x1=int(input("enter the element\n"))
    s1.append(x1)
s11=set(s1)
n=int(input("enter the number of elements  for list 2\n"))
s2=[]  
a=0
for i in range(n):
    x2=int(input("enter the element"))
    s2.append(x2)
   
s22=set(s2)
s32=set()
if(s11.intersection(s22)==s32):
    print("they doo not share any common element")
else:
    print("they do share a common element")
