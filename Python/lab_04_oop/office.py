import json


class Office:
    employeesNum = 0

    def __init__(self, name):
        self.name = name
        self.employees = []

    @classmethod
    def change_emps_num(cls, num):
        cls.employeesNum = num

    def get_all_employees(self):
        return self.employees

    def get_employee(self, empId):
        for emp in self.employees:
            if emp.id == empId:
                return emp
        return None

    def hire(self, employee):
        self.employees.append(employee)
        Office.employeesNum += 1

    def fire(self, empId):
        emp = self.get_employee(empId)

        if emp:
            self.employees.remove(emp)
            Office.employeesNum -= 1

    def deduct(self, empId, deduction):
        emp = self.get_employee(empId)

        if emp:
            emp.salary -= deduction

    def reward(self, empId, reward):
        emp = self.get_employee(empId)

        if emp:
            emp.salary += reward

    def check_lateness(self, empId, moveHour):
        emp = self.get_employee(empId)

        if emp:
            is_late = Office.calculate_lateness(
                9,
                moveHour,
                emp.distanceToWork,
                emp.car.velocity
            )

            if is_late:
                self.deduct(empId, 10)
                print("Employee is late")
            else:
                self.reward(empId, 10)
                print("Employee arrived on time")

    @staticmethod
    def calculate_lateness(targetHour, moveHour, distance, velocity):
        if velocity == 0:
            return True

        time = distance / velocity
        arrival = moveHour + time

        return arrival > targetHour

    def save_to_json(self):
        data = {
            "office_name": self.name,
            "employees": [emp.to_dict() for emp in self.employees]
        }

        with open("office.json", "w") as file:
            json.dump(data, file, indent=4)