from math import pi

def triangle_area(base, height):
  return base * height * 0.5

def rectangle_area(width, height):
  return width * height

def circle_area(radius):
  return radius * pi * 2

def square_area(side):
  return side * side

print("[t] - Traingle")
print('[r] - Reactangle')
print('[s] - Square')
print('[c] - Circle')

user_input = input("Choose Letter to find area :  ")

match user_input:
  case 't':
    base = int(input('Base : '))
    height = int(input('Height :'))
    print("Area : ", triangle_area(base, height))

  case 'r':
    width = int(input('Width : '))
    height = int(input('Height : '))
    print("Area : ", rectangle_area(width, height))

  case 's':
    side = int(input('Side : '))
    print("Area : ", square_area(side))

  case 'c':
    radius = int(input('Radius : '))
    print("Area : ", circle_area(radius))

  case _:
    print("Choose valid character/letter")


  

  
    



