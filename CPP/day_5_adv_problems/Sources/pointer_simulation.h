#pragma once
#include <iostream>
using namespace std;

void display_arr_items(const int *ptr, int size) {
    cout << "Array = [";
    for (int i = 0; i < size; i++) {
        cout << *(ptr+i) << " ";
    }
    cout << "]";
    cout << endl;
}

void swap_pointers(int** ptr_1, int** ptr_2) {
    int* temp_ptr = *ptr_1;
    *ptr_1 = *ptr_2;
    *ptr_2 = temp_ptr;

    cout << "Value of ptr_1 " << *ptr_1 << endl;
    cout << "Value of ptr_2 " << *ptr_2 << endl;
    cout << "\n";

    cout << "Value of val_1 " << **ptr_1 << endl;
    cout << "Value of val_2 " << **ptr_2 << endl;
}

void run_t_4() {
    // int arr[3] = {1, 2, 3};
    // display_arr_items(arr, 3);

    int val_1 = 1;
    int val_2 = 2;

    int* ptr_1 = &val_1;
    int* ptr_2 = &val_2;

    cout << ptr_1 << " => " << &val_1 << endl;
    cout << ptr_2 << " => " << &val_2 << endl;

    cout << "Addresses of pointer" << endl;

    cout << "Address of ptr_1 : " << &ptr_1 << endl;
    cout << "Address of ptr_2 : " << &ptr_2 << endl;

    swap_pointers(&ptr_1, &ptr_2);
}