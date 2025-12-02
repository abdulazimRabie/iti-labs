#include <iostream>

#include "SequenceLinkedList.h"

int main() {
    SequenceLinkedList list;

    int arr[] = {1, 2, 3, 4};

    list.build(arr, 4); // 1->2->3->4
    list.showNodes();

    list.delete_l(); // 4
    list.insert_l(5); // 1->2->3->5
    list.showNodes();

    list.insert_at(2, 22);
    list.insert_at_2(1, 111);
    list.showNodes();

    list.delete_at_2(2);
    list.showNodes();

    try {
        list.delete_at_2(32);
    } catch (exception &e) {
        cout << e.what() << endl;
    }



    return 0;
}