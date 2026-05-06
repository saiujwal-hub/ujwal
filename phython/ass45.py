class v:
    def __init__(self,b,m):
        self.b=b
        self.m=m
class car(v):
    def __init__(self,b,m,seats):
        super().__init__(b,m)
        self.seats=seats
class bike(v):
    def __init__(self,b,m,engine_cc):
        super().__init__(b,m)
        self.engine_cc=engine_cc
        
        