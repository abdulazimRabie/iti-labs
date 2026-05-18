def load_students():
  students = {}
  f = open('db/students.txt', 'r')
  for line in f.readlines():
      #['1,ahmed\n']
      s_id , s_name = line.strip().split(',')
      students[s_id] = s_name
  return students

def get_student(s_id):
  students = load_students() 
  if s_id in students.keys():
    return students.get(s_id)
  return None


def show_students_names():
   students = load_students()
   for student_name in students.values():
      print(student_name)