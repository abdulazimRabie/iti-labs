cmake_minimum_required(VERSION 4.0)
project(Day6_OOP)

set(CMAKE_CXX_STANDARD 20)

add_executable(Day6_OOP main.cpp
        Services/Date/DT.cpp
        Services/Date/DT.h
        Services/RemoteControl/RC.cpp
        Services/RemoteControl/RC.h)
