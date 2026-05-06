import json
cities={"hyd":"1000","delhi":"400","sikim":"12121"}
with open("cities.json","w") as f:
    json.dump(cities,f)
with open("cities.json","r") as f:
    print(f.read())
na=input("enter the name of the city which u want to update")
p=input("enter the population of that city")
cities.update({na:p})
with open("cities.json","w") as f:
    json.dump(cities,f)
print("updated version:\n")
with open("cities.json","r") as f:
    print(f.read())



