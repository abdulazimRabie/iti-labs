#pragma once

bool is_sorted(int arr[], int n) {
    if (n < 1) throw invalid_argument("Arr length cannot be less than 1");

    for (int i = 0; i < n-1; i++) {
        if (arr[i] > arr[i+1]) return false;
    }

    return true;
}