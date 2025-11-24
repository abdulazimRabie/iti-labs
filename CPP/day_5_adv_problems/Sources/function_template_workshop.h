#pragma once
#include <iostream>
#include <vector>
#include <string>
using namespace std;

template <typename T>
T computeAverage(T arr[], int size) {
    if (size == 0) return T();

    T sum = arr[0];
    for (int i = 1; i < size; i++) {
        sum += arr[i];
    }

    return (sum / size);
}

template<>
string computeAverage<string>(string arr[], int size) {
    if (size == 0) throw runtime_error("Passed string array is empty");

    string longest = arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i].length() > longest.length())
            longest = arr[i];
    }

    return longest;
}

template<typename T>
T computeAverage(vector<T> &vec) {
    if (!vec.size()) return 0;

    T sum = vec[0];
    for (auto num: vec) {
        sum += num;
    }

    return (sum/vec.size());
}

template<>
string computeAverage<string>(vector<string> &vec) {
    if (vec.empty()) throw runtime_error("Passed string vector is empty!");

    string longest = vec[0];

    for (const string& word : vec) {
        if (word.length() > longest.length()) {
            longest = word;
        }
    }

    return longest;
}

void run_t_5() {
    double arr_nums[] = {2.1, 3.2};
    string arr_str[] = {"abdelazim", "karim", "yehia"};

    vector<string> vec_str = {"abdo", "man", "zamalek"};
    string arr_empty[] = {};

    cout << computeAverage(vec_str) << endl;
}
