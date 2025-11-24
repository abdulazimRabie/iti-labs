#pragma once
#include <iostream>
#include <vector>
#include <string>
using namespace std;

struct Student {
    int id;
    string name;
    int age;
    char grade;
};

int isExisted(vector<Student>& std_db, int id) {
    for (int i = 0; i < std_db.size(); i++) {
        if (std_db[i].id == id) return i;
    }

    return -1;
}

void addStudent(vector<Student>& std_db, Student student) {
    if (isExisted(std_db, student.id) >= 0) // if existed, cannot add new one with same id
        throw runtime_error("This id of this student already existed !!");
    std_db.push_back(student);
}

void updateStudent(vector<Student>& std_db, int std_id, Student new_std) {
    int idx = isExisted(std_db, std_id);
    if (idx < 0)
        throw runtime_error("No student with this id!!");

    std_db[idx] = new_std;
}

Student searchStudent(vector<Student>& std_db, int id) {
    int idx = isExisted(std_db, id);
    if (idx < 0) throw runtime_error("No student with this ID!!!");

    return std_db[idx];
}

void displayStudent(vector<Student>& std_db, int idx) {
        cout << "Student ID : " << std_db[idx].id << endl;
        cout << "Student Name : " << std_db[idx].name << endl;
        cout << "Student Age : " << std_db[idx].age << endl;
        cout << "Student Grade : " << std_db[idx].grade << endl;
        cout << "==================";
}

void displayAllStudent(vector<Student>& std_db) {
    for (auto std : std_db) {
        cout << "Student ID : " << std.id << endl;
        cout << "Student Name : " << std.name << endl;
        cout << "Student Age : " << std.age << endl;
        cout << "Student Grade : " << std.grade << endl;
        cout << "==================";
    }
}

void run_t_6() {
    vector<Student> students;

    students.push_back({1, "Alice", 20, 'A'});
    students.push_back({2, "Bob", 19, 'B'});
    students.push_back({3, "Charlie", 21, 'A'});
    students.push_back({4, "Diana", 22, 'C'});

    displayAllStudent(students);

    // Test 1: Add a new student
    try {
        cout << "\nAdding a new student (Eve)...\n";
        addStudent(students, {5, "Eve", 23, 'B'});
        cout << "Student added successfully!\n";
    } catch (runtime_error& e) {
        cout << "Error: " << e.what() << endl;
    }

    // Test 2: Try to add duplicate ID
    try {
        cout << "\nAdding a duplicate student with ID=2...\n";
        addStudent(students, {2, "Fake Bob", 25, 'F'});
    } catch (runtime_error& e) {
        cout << "Expected Error: " << e.what() << endl;
    }

    // Test 3: Search for existing student
    try {
        cout << "\nSearching for student ID=3...\n";
        Student s = searchStudent(students, 3);
        cout << "Found: " << s.name << " (Age " << s.age << ", Grade " << s.grade << ")\n";
    } catch (runtime_error& e) {
        cout << "Error: " << e.what() << endl;
    }

    // Test 4: Search for non-existing student
    try {
        cout << "\nSearching for non-existing student ID=10...\n";
        Student s = searchStudent(students, 10);
    } catch (runtime_error& e) {
        cout << "Expected Error: " << e.what() << endl;
    }

    // Test 5: Update student info
    try {
        cout << "\nUpdating student ID=2 (Bob -> Bobby)...\n";
        updateStudent(students, 2, {2, "Bobby", 20, 'A'});
        cout << "Update successful!\n";
    } catch (runtime_error& e) {
        cout << "Error: " << e.what() << endl;
    }

    // Test 6: Display updated list
    cout << "\nUpdated Students List:\n";
    displayAllStudent(students);
}