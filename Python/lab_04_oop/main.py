from car import Car
from employee import Employee
from office import Office


def main():
    car = Car("Fiat128", 100, 60)

    samy = Employee(
        "Samy",
        5000,
        "happy",
        100,
        1,
        car,
        "samy@mail.com",
        5000,
        20
    )

    iti = Office("ITI Smart Village")

    iti.hire(samy)

    samy.sleep(6)
    samy.eat(2)
    samy.buy(3)
    samy.work(8)

    samy.drive(20)

    iti.check_lateness(1, 8.5)

    samy.send_mail(
        "manager@mail.com",
        "Attendance Report",
        "This is an email template",
        "Manager"
    )

    iti.save_to_json()

    print("\nEmployee Info")
    print("Name:", samy.name)
    print("Salary:", samy.salary)
    print("Money:", samy.money)
    print("Mood:", samy.mood)
    print("Health:", samy.healthRate)
    print("Fuel:", samy.car.fuelRate)


if __name__ == "__main__":
    main()