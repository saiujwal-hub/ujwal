class bankaccount:
    def __init__(self,an,on,ba):
        self.an=an
        self.on=on
        self.ba=ba
    def depsoit(self,am):

        self.ba=self.ba+am
    def win(self,am1):
              self.ba=self.ba-am1
    def balance(self):
          return self.ba