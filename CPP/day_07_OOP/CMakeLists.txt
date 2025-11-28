cmake_minimum_required(VERSION 4.0)
project(day_7_OOP)

set(CMAKE_CXX_STANDARD 20)

add_executable(day_7_OOP main.cpp
        Classes/Product/Product.cpp
        Classes/Product/Product.h
        Classes/Auditor/Auditor.cpp
        Classes/Auditor/Auditor.h)
