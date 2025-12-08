cmake_minimum_required(VERSION 4.0)
project(day_04)

set(CMAKE_CXX_STANDARD 20)

add_executable(day_04 main.cpp
        src/find_minimum.h
        src/sorting.h
        src/occurence.h
        src/tree.h)
