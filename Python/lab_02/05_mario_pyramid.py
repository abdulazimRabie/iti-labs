rows = 4

for i in range(1, rows+1):
  spaces_count = rows - i
  row = ''
  # print(spaces_count)
  for s in range(spaces_count):
    row += ' '
  for j in range(i):
    row += '*'

  print(row)


for i in range(1, rows+1):
  spaces = ' ' * (rows - i)
  stars = '*' * i
  print(spaces + stars)

