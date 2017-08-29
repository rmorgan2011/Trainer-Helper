
for i in range (51,101):
    fileString = 'C:/Users/morga/Documents/Final/trainer_helper/src/pokemon-data/data'+ str(i) + '.json'
    f = open(fileString, 'r')
    f1 = open('C:/Users/morga/Documents/Final/trainer_helper/src/pokemon-data/dataTest.json', 'a')
    appendString = ',' + f.read()
    f1.write(appendString)
    f.close()
    f1.close()
