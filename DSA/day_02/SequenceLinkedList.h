#pragma once
#include <stdexcept>
#include <iostream>
using namespace std;

/*
 Functions:
 build
 get_at
 set_at
 delete_f
 insert_f
 delete_l
 insert_l
 insert_at
 delete_at
*/

class Node {
public:
    int val;
    Node* next;

    Node(int val) : val(val), next(nullptr) {}
};

class SequenceLinkedList {
public:
    Node* head = nullptr;

    void build(int* arr, int len) {
        head = nullptr;
        Node* last = nullptr;

        for (int i = 0; i < len; i++) {
            Node* new_node = new Node(arr[i]);

            if (head == nullptr) {
                head = new_node;
                last = new_node;
            } else {
                last->next = new_node;
                last = new_node;
            }
        }
    }

    Node* get_at(int position) {
        if (position <= 0)
            throw invalid_argument("Position cannot be negative it is 1 index based");

        Node* curr = head;
        int idx = 1;

        while (curr != nullptr && idx < position) {
            curr = curr->next;
            idx++;
        }

        if (curr == nullptr)
            throw out_of_range("Position is out of range");

        return curr;
    }

    void set_at(int position, int data) {
        Node* node = get_at(position);
        node->val = data;
    }

    void delete_f() {
        if (!head)
            throw runtime_error("LinkedList is empty");

        Node* temp = head;
        head = head->next;
        delete temp;
    }


    void insert_f(int data) {
        Node* new_node = new Node(data);
        new_node->next = head;
        head = new_node;
    }


    void insert_l(int data) {
        Node* new_node = new Node(data);

        if (!head) {
            head = new_node;
            return;
        }

        Node* curr = head;
        while (curr->next != nullptr)
            curr = curr->next;

        curr->next = new_node;
    }


    void delete_l() {
        if (!head)
            throw runtime_error("List is empty");

        if (!head->next) { // happy case -- oooooh
            delete head;
            head = nullptr;
            return;
        }

        Node* prev = nullptr;
        Node* curr = head;

        while (curr->next != nullptr) {
            prev = curr;
            curr = curr->next;
        }

        prev->next = nullptr;
        delete curr;
    }

    void insert_at(int position, int data) {
        if (position == 1) {
            insert_f(data);
            return;
        }

        Node* prev = get_at(position - 1);
        Node* new_node = new Node(data);

        new_node->next = prev->next;
        prev->next = new_node;
    }

    void insert_at_2(int position, int data) {
        Node* dummy = new Node(0);
        dummy->next = head;

        Node* prev = dummy;
        Node* curr = head;
        int idx = 1;

        while (idx < position && curr != nullptr) {
            prev = curr;
            curr = curr->next;
            idx++;
        }

        if (!curr) {
            throw out_of_range("This position is not existed");
        }

        Node* new_node = new Node(data);
        prev->next = new_node;
        new_node->next = curr;

        head = dummy->next;
    }

    void delete_at(int position) {
        if (position == 1) {
            delete_f();
            return;
        }

        Node* prev = get_at(position - 1);

        if (!prev->next)
            throw out_of_range("Position out of range");

        Node* target = prev->next;
        prev->next = target->next;
        delete target;
    }

    void delete_at_2(int position) {
        if (position <= 0) throw out_of_range("Negative possssstiononno");

        Node* dummy = new Node(0);
        dummy->next = head;

        Node* prev = dummy;
        Node* curr = head;
        int idx = 1;

        while (idx < position && curr != nullptr) {
            prev = curr;
            curr = curr->next;
            idx++;
        }

        if (curr == nullptr) {
            throw out_of_range("Out of boundaries");
        }

        prev->next = curr->next;
    }


    void showNodes() {
        Node* curr = head;

        while (curr) {
            cout << curr->val << "->";
            curr = curr->next;
        }

        cout << endl;
    }
};
