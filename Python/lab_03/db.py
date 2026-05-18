import os
students = ['1,ahemd', '2,ali']
grades = [
  '1,Python,85',
  '1,Math,90',
  '1,English,88',
  '2,Python,78',
  '2,Math,82',
  '2,English,75'
]

def generate_students():
  f = open('db/students.txt', 'a')
  for student in students:
    f.write(student+'\n')
  f.close()


def generate_grades():
  f = open('db/grades.txt', 'a')
  for grade in grades:
    f.write(grade+'\n')
  f.close()

def remove_db():
  os.system('rm db/*.txt')

# remove_db()

def run_db():
  generate_students()
  generate_grades()