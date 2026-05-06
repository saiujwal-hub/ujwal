class book:
    
    def __init__(self,title,author):
        self.tiltle=title
        self.author=author
        self.lr=[]
    def add(self,r):
    
        self.lr.append(r)
    def c(self):
        return len(self.lr)

    def d(self):
        print(self.lr)



