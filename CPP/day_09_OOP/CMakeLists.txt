cmake_minimum_required(VERSION 4.0)
project(day_9_OOP)

set(CMAKE_CXX_STANDARD 20)

add_executable(day_9_OOP main.cpp
        Classes/LearningMaterial.h
        Classes/VideoLesson.h
        Classes/Article.h
        Classes/Quiz.h
        Classes/Course.h)
