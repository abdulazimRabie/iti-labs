from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from rest_framework import viewsets, filters, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django_filters.rest_framework import DjangoFilterBackend
from api.models import Student, Teacher, Course, Enrollment
from api.serializers import (
    StudentSerializer,
    TeacherSerializer,
    CourseSerializer,
    EnrollmentSerializer,
    UserRegisterSerializer,
)


class AuthViewSet(viewsets.ViewSet):
    """Handles user registration and login with token authentication."""

    permission_classes = []

    @action(detail=False, methods=['post'], url_path='register')
    def register(self, request):
        serializer = UserRegisterSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            token, _ = Token.objects.get_or_create(user=user)
            return Response({'token': token.key}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    @action(detail=False, methods=['post'], url_path='login')
    def login(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)
        if user:
            token, _ = Token.objects.get_or_create(user=user)
            return Response({'token': token.key}, status=status.HTTP_200_OK)
        return Response(
            {'error': 'Invalid credentials'},
            status=status.HTTP_400_BAD_REQUEST
        )


class TeacherViewSet(viewsets.ModelViewSet):
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['id', 'name', 'age', 'salary']
    search_fields = ['name']
    ordering_fields = '__all__'


class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['id', 'name', 'hours', 'level', 'teacher']
    search_fields = ['name', 'level']
    ordering_fields = '__all__'

    @action(detail=True, methods=['post'], url_path='assign-teacher')
    def assign_teacher(self, request, pk=None):
        """Assign a teacher to a course."""
        course = self.get_object()
        teacher_id = request.data.get('teacher_id')
        try:
            teacher = Teacher.objects.get(pk=teacher_id)
        except Teacher.DoesNotExist:
            return Response(
                {'error': 'Teacher not found.'},
                status=status.HTTP_404_NOT_FOUND
            )
        course.teacher = teacher
        course.save()
        return Response(
            {'message': f'Teacher {teacher.name} assigned to {course.name}.'},
            status=status.HTTP_200_OK
        )


class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['id', 'name', 'phone', 'age', 'gender', 'address', 'level']
    search_fields = ['name', 'phone', 'address']
    ordering_fields = '__all__'

    @action(detail=True, methods=['post'], url_path='enroll')
    def enroll(self, request, pk=None):
        """Enroll a student in a course with a grade."""
        student = self.get_object()
        course_id = request.data.get('course_id')
        grade = request.data.get('grade')

        try:
            course = Course.objects.get(pk=course_id)
        except Course.DoesNotExist:
            return Response(
                {'error': 'Course not found.'},
                status=status.HTTP_404_NOT_FOUND
            )

        if student.level != course.level:
            return Response(
                {'error': 'Student level must match the course level.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        if course.teacher is None:
            return Response(
                {'error': 'Course must have a teacher assigned before enrollment.'},
                status=status.HTTP_400_BAD_REQUEST
            )

        enrollment, created = Enrollment.objects.get_or_create(
            student=student,
            course=course,
            defaults={'grade': grade}
        )
        if not created:
            if grade is not None:
                enrollment.grade = grade
                enrollment.save()
            return Response(
                {'message': 'Student already enrolled. Grade updated.'},
                status=status.HTTP_200_OK
            )

        return Response(
            {'message': f'Student enrolled in {course.name}.'},
            status=status.HTTP_201_CREATED
        )


class EnrollmentViewSet(viewsets.ModelViewSet):
    queryset = Enrollment.objects.all()
    serializer_class = EnrollmentSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter]
    filterset_fields = ['id', 'student', 'course', 'grade']
    search_fields = []
    ordering_fields = '__all__'
