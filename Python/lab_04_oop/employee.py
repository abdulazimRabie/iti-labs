import re
from person import Person


class Employee(Person):
    def __init__(self, name, money, mood, healthRate,
                 emp_id, car, email, salary, distanceToWork):

        super().__init__(name, money, mood, healthRate)

        self.id = emp_id
        self.car = car
        self.email = email
        self.salary = salary
        self.distanceToWork = distanceToWork

    @property
    def salary(self):
        return self._salary

    @salary.setter
    def salary(self, value):
        if value >= 1000:
            self._salary = value
        else:
            self._salary = 1000

    @property
    def email(self):
        return self._email

    @email.setter
    def email(self, value):
        pattern = r'^[\w\.-]+@[\w\.-]+\.\w+$'
        if re.match(pattern, value):
            self._email = value
        else:
            self._email = "invalid@mail.com"

    def work(self, hours):
        if hours == 8:
            self.mood = "happy"
        elif hours > 8:
            self.mood = "tired"
        else:
            self.mood = "lazy"

    def drive(self, distance):
        self.car.run(self.car.velocity, distance)

    def refuel(self, gasAmount=100):
        self.car.fuelRate += gasAmount

    def send_mail(self, to, subject, msg, receiver_name):
        with open("email.txt", "w") as file:
            file.write(f"From: {self.email}\n")
            file.write(f"To: {to}\n")
            file.write(f"Hi, {receiver_name}\n")
            file.write(f"{msg}\n")
            file.write("thanks\n\n")
            file.write(subject)

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "money": self.money,
            "mood": self.mood,
            "healthRate": self.healthRate,
            "email": self.email,
            "salary": self.salary,
            "distanceToWork": self.distanceToWork,
            "car": self.car.to_dict()
        }