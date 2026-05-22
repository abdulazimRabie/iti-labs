from django.contrib.auth.models import User
from rest_framework import serializers
from api.models import Student, Teacher, Course, Enrollment


class UserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')

    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data.get('email', ''),
            password=validated_data['password']
        )
        return user


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = '__all__'


class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'


class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'


class EnrollmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enrollment
        fields = '__all__'

    def validate(self, attrs):
        student = attrs.get('student')
        course = attrs.get('course')

        if student and course:
            if student.level != course.level:
                raise serializers.ValidationError(
                    "Student level must match the course level."
                )
            if course.teacher is None:
                raise serializers.ValidationError(
                    "Course must have a teacher assigned before enrollment."
                )

        return attrs
