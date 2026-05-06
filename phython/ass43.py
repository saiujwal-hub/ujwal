class student:
    def __init__(self,n,r,m):
        self.__n=n
        self.__r=r
        self.__m=m
    def setname(self,n):
        if n!="":
            self.__n=n
    def setname(self,r):
        if r>1 and r<100:
            self.__r=r
    def setname(self,m):
        if m>0:
            self.__m=m
        

