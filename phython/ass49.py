class herbivore:
    def plants(self):
        print("eats plants")
class carnivore:
    def animals(self):
        print("eats animals")
class omnivore:
    def both(self):
        print("eats both")
class bear(herbivore,carnivore,omnivore):
    def lol(self):
        print("bear is animal")
b=bear()
b.plants()
b.animals()
b.both()

    