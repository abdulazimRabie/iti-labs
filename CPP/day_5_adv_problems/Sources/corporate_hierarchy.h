#pragma once
#include <iostream>
#include <vector>
#include <string>
using namespace std;

struct Employee {
    string name;
    int id;
    float salary;
};

struct Department {
    string name;
    vector<Employee> emps;
};

void disply_with_heighes_salary(Department const *dept) {
    float highest_salary = 0.0f;
    for (auto emp : dept->emps) {
        if (emp.salary > highest_salary) highest_salary = emp.salary;
    }

    cout << "Department :" << dept->name << endl;
    cout << "Highest Salary : " << highest_salary << endl;
}

void display_employees(Department& dept) {
    cout << "Dept : " << dept.name << endl;

    for (auto emp : dept.emps) {
        cout << "Name : " << emp.name << endl;
        cout << "id : " << emp.id << endl;
        cout << "Salary : " << emp.salary << endl;
        cout << "====== ===== ======" << endl;
    }
}

void h_dpept(vector<Department> & depts) {
    if (depts.size() == 0) return;
    string dept_name = depts[0].name;
    double salary = depts[0].emps[0].salary;

    for (auto dept : depts) {
        for (auto emp : dept.emps) {
            if (emp.salary > salary) {
                dept_name = dept.name;
                salary = emp.salary;
            }
        }
    }

    cout << "Department : " << dept_name << endl;
    cout << "Highest Salary : " << salary << endl;
}

void run_t_3() {
    Employee
        emp1 = {"Abdo", 1, 3000.0},
        emp2 = {"Yehia", 2, 9060.1},
        emp3 = {"Karim", 3, 10000.0},
        emp4 = {"Ahmed", 1, 300000.0},
        emp5 = {"Mohamed", 2, 9060.1},
        emp6 = {"Hemdan", 3, 10000.0}
    ;

    Department dept;
    dept.name = "Tech";

    dept.emps.push_back(emp1);
    dept.emps.push_back(emp2);
    dept.emps.push_back(emp3);

    Department dept1;
    dept1.name = "Finance";

    dept1.emps.push_back(emp4);
    dept1.emps.push_back(emp5);
    dept1.emps.push_back(emp6);

    vector<Department> all_depts = {dept, dept1};

    h_dpept(all_depts);

    cout << "=========== \n";

    display_employees(dept);

    cout << "=========== \n";
    disply_with_heighes_salary(&dept);
}