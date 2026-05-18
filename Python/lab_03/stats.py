from student.load_students import load_students, get_student
from grades.load_grades import load_grades, student_grades


s_id = input('Student ID: ')

student = get_student(s_id)
if student is None:
  print("No Student with this ID")
else :
  grades = student_grades(s_id)
  total = 0
  print("Studen : ", student)
  print("================")

  for grade in grades:
    print(grade[0] , "|", grade[1])
    total += int(grade[1])

  avg = total/len(student_grades(s_id))
  print("================")
  print('Total : ', total)
  print('AVG : ', avg)

