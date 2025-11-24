#pragma once
#include <iostream>
#include <vector>
#include <string>
#include <chrono>
#include <stdexcept>
#include <algorithm>
#include <numeric>

using namespace std;
using namespace std::chrono;

// struct BenchmarkResult {
//     double minTime;
//     double maxTime;
//     double avgTime;
// };

template <typename T>
void benchmarkVector(const vector<T>& data, double& minTime, double& maxTime, double& avgTime) {
    if (data.empty()) {
        throw runtime_error("Error: Cannot benchmark an empty vector.");
    }

    vector<double> times_duration;

    for (int i = 0; i < 5; ++i) {
        auto start = high_resolution_clock::now();

        auto result = accumulate(data.begin(), data.end(), T{});

        auto end = high_resolution_clock::now();
        double duration = duration_cast<microseconds>(end - start).count();
        times_duration.push_back(duration);
    }

    // min, max, average
    minTime = *min_element(times_duration.begin(), times_duration.end());
    maxTime = *max_element(times_duration.begin(), times_duration.end());
    avgTime = accumulate(times_duration.begin(), times_duration.end(), 0.0) / times_duration.size();
}

void run_t_7() {
    try {
        vector<int> intVec(100000, 42);
        vector<double> doubleVec(100000, 3.14);
        vector<string> stringVec(10000, "hello");

        double minT, maxT, avgT;

        cout << "--- Benchmarking INT ---" << endl;
        benchmarkVector(intVec, minT, maxT, avgT);
        cout << "Min: " << minT << " micro sec, \nMax: " << maxT << " micro sec, \nAvg: " << avgT << " micro sec\n\n";

        cout << "--- Benchmarking DOUBLE ---" << endl;
        benchmarkVector(doubleVec, minT, maxT, avgT);
        cout << "Min: " << minT << " micro sec, \nMax: " << maxT << " micro sec, \nAvg: " << avgT << " micro sec\n\n";

        cout << "--- Benchmarking STRING ---" << endl;
        benchmarkVector(stringVec, minT, maxT, avgT);
        cout << "Min: " << minT << " micro sec, \nMax: " << maxT << " micro sec, \nAvg: " << avgT << " micro sec\n\n";


        // exception !
        // vector<int> emptyVec;
        // benchmarkVector(emptyVec, minT, maxT, avgT);

    } catch (const exception& e) {
        cerr << e.what() << endl;
    }
}