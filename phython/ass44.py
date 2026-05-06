class shape:
    def area(self):
        return 0
class circle(shape):
    def __init__(self,r):
        self.r=r
    def area(self):
        area=3.14*self.r*self.r
class rectangle(shape):
    def __init__(self,l,b):
        self.l=l
        self.b=b
    def area(self):
        area=self.l*self.b
    

