n=int(input("enter the number of elements for list 1\n"))
s1=[]  
a=0
for i in range(n):
    x1=int(input("enter the element\n"))
    s1.append(x1)
tup=tuple(s1)
s2=[]
for i in tup:
    if(tup.count(i)>1):
        s2.append(i)
s5=set(s2)
print(s5)