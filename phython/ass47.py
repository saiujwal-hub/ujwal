class Person:
    def __init__(self, name, age=None, address=None):
        self.name = name
        self.age = age
        self.address = address

    def display(self):
        print("Name:", self.name)
        print("Age:", self.age)
        print("Address:", self.address)
p1 = Person("Rahul")
p2 = Person("Rahul", 20)
p3 = Person("Rahul", 20, "Hyderabad")

p1.display()
print()
p2.display()
print()
p3.display()
