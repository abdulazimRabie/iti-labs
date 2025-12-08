#pragma once
#include <stdexcept>
using namespace  std;

int find_min(int arr[], int n) {
    if (n < 1) throw invalid_argument("Arr length cannot be less than 1");

    int mini_num = arr[0];
    for (int i = 1; i < n; i++) {
        if (arr[i] < mini_num) mini_num = arr[i];
    }

    return mini_num;
}