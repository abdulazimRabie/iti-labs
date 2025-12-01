#pragma once
#include <stdexcept>
using namespace std;
/*
 * get_at
 * set_at
 * insert_f
 * delete_f
 * insert_l
 * delete_l
 * insert_at
 * delete_at
 */

class SequenceArray {
public:
    int* arr;
    int count = 0, len = 0;

    SequenceArray(int n) {
        this->len = n;
        this->arr = new int[n];
    }

    void build(int* arr, int n) {
        if (len <= n) {
            for (int i = 0; i < len; i++) {
                this->arr[i] = arr[i];
            }
        } else {
            throw invalid_argument("passed array is bigger than reserved size");
        }
    }

    int get_at(int idx) {
        if (idx < 0 || idx > count) {
            throw runtime_error("Cannot access this index");
        }

        return arr[idx];
    }

    void set_at(int val, int idx) {
        if (idx < 0 || idx > count) {
            throw runtime_error("Cannot access this index");
        }

        arr[idx] = val;
        count++;
    }

    void insert_f(int val) {
        // reallocate larger array
        if (count >= len) {
            int* new_arr = new int[len+1];
            new_arr[0] = val;
            for (int i = 0; i < len; i++) {
                new_arr[i+1] = this->arr[i];
            }
            count++;
            len++;
            arr = new_arr;
        } else {
            for (int i = count-1; i > -1; i--) {
                arr[i+1] = arr[i];
            }
            arr[0] = val;
            count++;
        }
    }

    void delete_f() {
        if (count != 0) {
            for (int i = 0; i < count-1; i++) {
                arr[i] = arr[i+1];
            }
            count--;
        }
    }

    void insert_l(int val) {
        if (count >= len) {
            int* new_arr = new int[len+1];
            for (int i = 0; i < count; i++) {
                new_arr[i] = arr[i];
            }
            new_arr[count] = val;
            count++;
            len++;
            arr = new_arr;
        } else {
            arr[count++] = val;
        }
    }

    void delete_l() {
        // resize array with smaller size o(n);
        count--; // happy case
    }

    void insert_at(int val, int idx) {
        if (idx > count || idx < 0) {
            throw runtime_error("Cannot insert values at this position");
        }
        arr[count++] = val;
    }

    void delete_at(int idx) {
        if (idx >= count || idx < 0)
            throw runtime_error("Cannot delete at this poistion");

        for (int i = idx; i < count-1; i++) {
            arr[idx] = arr[idx+1];
        }

        count--;
    }
};