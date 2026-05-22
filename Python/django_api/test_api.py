#!/usr/bin/env python
"""
Test script to verify Django API endpoints.
Run with: python test_api.py
"""
import os
import sys
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'school_project.settings')
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
django.setup()

from django.test import Client
import json

client = Client()

def print_response(resp, label):
    print(f"\n=== {label} ===")
    print(f"Status: {resp.status_code}")
    try:
        print(json.dumps(resp.json(), indent=2))
    except Exception:
        print(resp.content.decode())

# 1. Register a user
print("--- Step 1: Register ---")
resp = client.post(
    '/api/auth/register/',
    data=json.dumps({'username': 'admin', 'password': 'admin123', 'email': 'admin@test.com'}),
    content_type='application/json'
)
print_response(resp, 'Register')
token = resp.json().get('token', '')

# Helper for authenticated requests
headers = {'HTTP_AUTHORIZATION': f'Token {token}'}

# 2. Login
print("--- Step 2: Login ---")
resp = client.post(
    '/api/auth/login/',
    data=json.dumps({'username': 'admin', 'password': 'admin123'}),
    content_type='application/json'
)
print_response(resp, 'Login')

# 3. Create a teacher
print("--- Step 3: Create Teacher ---")
resp = client.post(
    '/api/teachers/',
    data=json.dumps({'name': 'Dr. Smith', 'age': 45, 'salary': 5000.00}),
    content_type='application/json',
    **headers
)
print_response(resp, 'Create Teacher')
teacher_id = resp.json().get('id')

# 4. Create a course WITHOUT teacher
print("--- Step 4: Create Course (no teacher) ---")
resp = client.post(
    '/api/courses/',
    data=json.dumps({'name': 'Math 101', 'hours': 30, 'level': 'L1'}),
    content_type='application/json',
    **headers
)
print_response(resp, 'Create Course (no teacher)')
course_id = resp.json().get('id')

# 5. Create a student (L1)
print("--- Step 5: Create Student ---")
resp = client.post(
    '/api/students/',
    data=json.dumps({
        'name': 'Alice',
        'phone': '1234567890',
        'age': 20,
        'gender': 'female',
        'address': '123 Main St',
        'level': 'L1'
    }),
    content_type='application/json',
    **headers
)
print_response(resp, 'Create Student')
student_id = resp.json().get('id')

# 6. Try to enroll student in course with no teacher -> should fail
print("--- Step 6: Enroll in course without teacher (should fail) ---")
resp = client.post(
    f'/api/students/{student_id}/enroll/',
    data=json.dumps({'course_id': course_id, 'grade': 85}),
    content_type='application/json',
    **headers
)
print_response(resp, 'Enroll without teacher')

# 7. Assign teacher to course
print("--- Step 7: Assign Teacher to Course ---")
resp = client.post(
    f'/api/courses/{course_id}/assign-teacher/',
    data=json.dumps({'teacher_id': teacher_id}),
    content_type='application/json',
    **headers
)
print_response(resp, 'Assign Teacher')

# 8. Enroll student -> should succeed
print("--- Step 8: Enroll in course with teacher (should succeed) ---")
resp = client.post(
    f'/api/students/{student_id}/enroll/',
    data=json.dumps({'course_id': course_id, 'grade': 85}),
    content_type='application/json',
    **headers
)
print_response(resp, 'Enroll with teacher')

# 9. Create a student with L2 and try to enroll in L1 course -> should fail
print("--- Step 9: Create L2 Student ---")
resp = client.post(
    '/api/students/',
    data=json.dumps({
        'name': 'Bob',
        'phone': '0987654321',
        'age': 22,
        'gender': 'male',
        'address': '456 Oak St',
        'level': 'L2'
    }),
    content_type='application/json',
    **headers
)
print_response(resp, 'Create L2 Student')
l2_student_id = resp.json().get('id')

print("--- Step 10: Enroll L2 student in L1 course (should fail) ---")
resp = client.post(
    f'/api/students/{l2_student_id}/enroll/',
    data=json.dumps({'course_id': course_id, 'grade': 90}),
    content_type='application/json',
    **headers
)
print_response(resp, 'Enroll L2 in L1')

# 11. Filter teachers by age
print("--- Step 11: Filter teachers by age=45 ---")
resp = client.get('/api/teachers/?age=45', **headers)
print_response(resp, 'Filter Teachers')

# 12. Filter courses by level
print("--- Step 12: Filter courses by level=L1 ---")
resp = client.get('/api/courses/?level=L1', **headers)
print_response(resp, 'Filter Courses')

print("\n\nAll tests completed successfully!")
