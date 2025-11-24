cmake_minimum_required(VERSION 4.0)
project(day_10_OOP)

set(CMAKE_CXX_STANDARD 20)

add_executable(day_10_OOP main.cpp
        Classes/DigitalContent.h
        Classes/Sharable.h
        Classes/Evaluatable.h)
