n=int(input("enter the number of elements"))
s=[]  
a=0
for i in range(n):
    x=int(input("enter the element"))
    s.append(x)
    a=a+x
k=len(s)
d=a/k
print("avg=",d)
