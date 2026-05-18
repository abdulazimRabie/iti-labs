letter = input("Letter You Look For : ")
str = input("String : ")

def character_locater(str, letter):
  list = [] 
  for i in range(len(str)):
    if str[i] == letter: list.append(i)
  return list

print(character_locater(str, letter))