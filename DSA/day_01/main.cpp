#include <iostream>
#include "SequenceArray.h"

int main() {
    SequenceArray sq(5);

    // sq.build()

    sq.insert_f(40); // 3
    sq.insert_f(30); // 2
    sq.insert_f(20); // 1
    sq.insert_f(10); // 0

    sq.delete_at(2);

    sq.delete_l();

    sq.insert_l(300);

    for (int i = 0; i < sq.count; i++) {
        cout << sq.arr[i] << endl;
    }

    return 0;
}