vowels = ['a', 'e', 'o', 'u', 'i']

list_inputs = []
user_input = ''

while user_input != '-1':
  user_input = input('Word : ')
  if user_input != '-1': list_inputs.append(user_input)



def remove_vowels(word):
  return word.replace('a', '').replace('e', '').replace('o', '').replace('u', '').replace('i', '')

def replace_many(list_words):
  result = []
  for word in list_words:
    result.append(remove_vowels(word))
  return result


print(replace_many(list_inputs))

