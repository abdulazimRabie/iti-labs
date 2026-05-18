vowels = ['a', 'e', 'o', 'u', 'i']
sentence = 'mobile'
new_scentence = ''

for i in range(len(sentence)):
  if (sentence[i] not in vowels):
     new_scentence += sentence[i]

print(new_scentence)


# task 2
index = []
str = "This is JavaScript"
letter = 'i'

for i in range(len(str)):
   if (str[i] == letter): index.append(i)

print(index)