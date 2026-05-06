class player:
    playercount=0
    def __init__(self,name,level):
        self.name=name
        self.level=level
        player.playercount=player.playercount+1
p1=player("sai",1)
p2=player("dk",2)
p3=player("kd",3)
print("the total number of players",player.playercount)




    