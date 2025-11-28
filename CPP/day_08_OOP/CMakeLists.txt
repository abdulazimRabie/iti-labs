cmake_minimum_required(VERSION 4.0)
project(day_8_OOP)

set(CMAKE_CXX_STANDARD 20)

add_executable(day_8_OOP main.cpp
        Classes/SmartDevice/SmartDevice.cpp
        Classes/SmartDevice/SmartDevice.h
        Classes/Room/Room.cpp
        Classes/Room/Room.h)
