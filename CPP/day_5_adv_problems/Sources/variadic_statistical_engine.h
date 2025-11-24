#pragma once
#include <iostream>
#include <string>
#include <cmath>
#include <cstdarg>
using namespace std;

void analyze(int count, ...) {
    va_list args;
    va_start(args, count);

    int total = 0;
    float avg = 0.0, variance = 0.0;

    for (int i = 0; i < count; i++) {
        int item = va_arg(args, int);
        total += item;
    }
    avg = (float)total/count;

    va_start(args, count);

    for (int i = 0; i < count; i++) {
        int item = va_arg(args, int);
        variance += ((item - avg) * (item - avg));
    }
    variance /= count;

    cout << "Avg : " << avg << endl;
    cout << "Variance : " << variance << endl;

    va_end(args);
}

template<typename T>
void analyze(int count, ...) {
    if (count == 0) {
        cout << "Error: No arguments provided.\n";
        return;
    }

    va_list args;
    va_start(args, count);

    double sum = 0;
    double values[count];

    for (int i = 0; i < count; ++i) {
        values[i] = static_cast<double>(va_arg(args, T));
        sum += values[i];
    }

    va_end(args);

    double mean = sum / count;

    double variance = 0;
    for (int i = 0; i < count; ++i) {
        variance += pow(values[i] - mean, 2);
    }
    variance /= count;

    cout << "Average: " << mean << endl;
    cout << "Variance: " << variance << endl;
}

void run_t_2() {
    analyze(3, 2, 4, 6);
}