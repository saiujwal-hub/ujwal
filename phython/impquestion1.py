info={("alice","math"),("bob","science"),("charlie","math"),("alice","english"),("charlie","english")}
dic={}
for name , course in info:
   if(dic.get(name)==None):
      dic.update({name:set()})
      dic[name].add(course)

             