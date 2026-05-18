def load_grades():
  grades = {}
  f = open('db/grades.txt', 'r')
  for line in f.readlines():
      #['1,python,49\n']
      s_id , subject, grade = line.strip().split(',')
      if (grades.get(s_id)): grades[s_id].append([subject, grade])
      else: grades[s_id] = [[subject,grade]]
  return grades


def grades_of(subject):
  subject_grade= []
  grades = load_grades()
  for student_grades in grades.values():
    for grade in student_grades:
      if (grade[0] == subject): subject_grade.append(grade[1])
  return subject_grade

def student_grades(u_id):
  grades = load_grades()
  if u_id in grades.keys():
    return grades.get(u_id)
  return None

