names = ['fatma', 'Ibrahim', 'ahmed']

dict = {}


for name in names:
  if dict.get(name[0].lower()):
    dict[name[0]].append(name)
  else:
    dict[name[0].lower()] = [name]


print(sorted(dict))
sorted_dict = {k: dict[k] for k in sorted(dict)}

print(sorted_dict)