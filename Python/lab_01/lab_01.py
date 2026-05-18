# task 1
num, start, end = 15, 0, 20

if start <= num <= end:
  print("True")
else:
  print("False")


# task 2
age = 19
have_copun = False

if age < 18 or age > 65 or have_copun:
  print("You ar eligable : True")
else:
  print("Nooop , False")

# task 3
name = "Abdelazim"
greeting = f"Hello , {name}"
greeting1 = "hello , {}".format(name)
print(greeting)
print(greeting1)

# task 4
full_name = "Abdelazim Rabie"
f_name = full_name.split()[0][0]
l_name = full_name.split()[-1][0]
print(f_name + ' ' + l_name)

# task 5
standard_formated_msg = '{} is {} Years old'.format(name, age)
print(standard_formated_msg)