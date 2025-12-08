#include <iostream>
using namespace std;

void merge(int *original_arr, int l, int m, int r) {
    int l_size = m-l+1,
        r_size = r-m;

    int *l_arr = new int[l_size];
    int *r_arr = new int[r_size];

    for (int i = 0; i < l_size; i++) {
        l_arr[i] = original_arr[i+l];
    }

    for (int i = 0; i < r_size; i++) {
        r_arr[i] = original_arr[i+m+1];
    }

    int i = 0, j = 0, k = l;

    while (i < l_size && j < r_size) {
        if (l_arr[i] < r_arr[j])
            original_arr[k++] = l_arr[i++];
        else
            original_arr[k++] = r_arr[j++];
    }

    // rest of left array
    while (i < l_size) {
        original_arr[k++] = l_arr[i++];
    }

    while (j < r_size) {
        original_arr[k++] = r_arr[j++];
    }
}

void merge_sort(int *arr, int l, int r) {
    if (l < r) {
        int mid = ((r-l)/2) + l; // 2
        merge_sort(arr, l, mid); // 0 - 2
        merge_sort(arr, mid+1, r); // 3 - 5
        merge(arr, l, mid, r); // 0 2 5
    }
}

int main() {
    int* arr = new int[6] {7, 6, 2, 1, 5, 4};
    merge_sort(arr, 0, 5);

    for(int i = 0; i < 6; i++) {
        cout << arr[i] << endl;
    }
    return 0;
}
