with open("log.txt", "a") as f:
    f.write("Program run successfully\n")

with open("log.txt", "r") as f:
    print("Log contents:")
    print(f.read())
