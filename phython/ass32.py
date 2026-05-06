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
n=int(input("enter the number of elements  for list 3\n"))
s3=[]  
a=0
for i in range(n):
    x3=int(input("enter the element"))
    s3.append(x3)
s33=set(s3)
s5=s11.union(s22)
s6=s5.union(s33)
print(s6)