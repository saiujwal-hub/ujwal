words =["apple","banana","kiwi","cherry","mango"]
dic={}
for ch in words:
    if(dic.get(ch)==None):
        dic.update({ch:len(ch)})

print(dic.items())