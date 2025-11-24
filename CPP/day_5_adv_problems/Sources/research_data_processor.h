#pragma once
#include <iostream>
#include <vector>
using namespace std;

// vector<int> process_temp(vector<int> &temps, int &min, int &max, int &avg);

void process_temp(vector<int> &temps, int &min, int &max, int &avg) {
    if (temps.empty()) throw runtime_error("NOOOOOOO temps ...  NOOOOOOOOOO temps!!!!");

    min = temps[0];
    max = temps[0];
    avg = temps[0];

    int total = 0;

    for (auto temp : temps) {
        if (temp < 0) throw runtime_error("Temp Cannot be negative in this region!!!");
        if (temp < min) min = temp;
        if (temp > max) max = temp;
        total += temp;
    }

    avg = total/temps.size();
}

void run_t_1() {
    vector<int> temps = {30, 22, 19};
    int min, max, avg;
    try {
        process_temp(temps, min, max, avg);

        cout << "Min : " << min << endl;
        cout << "Max : " << max << endl;
        cout << "Avg : " << avg << endl;

        cout << "Temps : [";
        for (auto t : temps) {
            cout << t << ", ";
        }
        cout << "]" << endl;
    } catch (exception &e) {
        cout << "Error Message : " << e.what() << endl;
    }
}