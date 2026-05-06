with open("name.txt","w") as f:
    for i in range(5):
        n=input("enter the name")
        f.write(n+"\n")
with open("name.txt","r") as f: 
    print(f.read())
    