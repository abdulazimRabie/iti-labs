#pragma once

int count_occurence(int arr[], int n, int target) {
    int count = 0;

    for (int i = 0; i < n; i++) {
        if (arr[i] == target) count++;
    }

    return count;
}

int first_occurence(int arr[], int n, int target) {
    int l = 0,
        r = n-1;
    int index = -1;
    while (l <= r) {
        int m = ((r-l)/2) + l;
        if (arr[m] == target) {
            index = m;
        }

        if (target > arr[m]) l = m+1;
        else r = m-1;
    }

    return index;
}

int last_occurence(int arr[], int n, int target) {
    int l = 0,
       r = n-1;
    int index = -1;
    while (l <= r) {
        int m = ((r-l)/2) + l;
        if (arr[m] == target) {
            index = m;
        }

        if (target >= arr[m]) l = m+1;
        else r = m-1;
    }

    return index;
}