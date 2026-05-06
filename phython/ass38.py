s=input("enter the string")
k=0
for ch in s:
    if((ord(ch)>=65 and ord(ch)<=90) or (ord(ch)>=97 and ord(ch)<=122)):
        print("")
    else:
        k=k+1
        print(ch)
print(k)            
