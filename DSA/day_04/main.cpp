#include <iostream>
#include "src/find_minimum.h"
#include "src/sorting.h"
#include "src/occurence.h"
#include "src/tree.h"

void test_tree() {
    Node *n_9 = new Node(9);
    n_9->children.push_back(new Node(5));

    Node *n_6 = new Node(6);
    n_6->children.push_back(new Node(5));
    n_6->children.push_back(new Node(11));

    Node *n_9_p = new Node(9);
    n_9_p->children.push_back(n_9);

    Node *n_7 = new Node(7);
    n_7->children.push_back(new Node(2));
    n_7->children.push_back(n_6);

    Node *n_root = new Node(1);
    n_root->children.push_back(n_7);
    n_root->children.push_back(n_9_p);

    cout << "Height of Tree : " << height(n_root) << endl;
    cout << "====" << endl;
    cout << "Nodes of Tree : " << count_nodes(n_root) << endl;
}

void construct_tree_using_array() {
    // using array
    int *arr;
    arr[0] = -1;
    arr[1] = 1;
    arr[2] = 7; // idx: 2
    arr[3] = 9;
    arr[4] = 2; // parent : index : 2 -> left : 2*2 = 4
    arr[5] = 6; // parent : index : 2 -> right : 2*2+1 = 5
    arr[6] = -1; // parent : index : 3 -> left : 2*3 = 6
    arr[7] = 9; // parent : index : 3 -> right : 2*3+1 = 7
    arr[8] =  -1; // parent : 2 (index 4) -> left = 2*4 = 8
    arr[9] =  -1; // parent : 2 (index 4) -> right = 2*4+1 = 9
    arr[10] = 5; // parent : 6 (index 5) -> left = 2*5 = 10
    arr[11] = 11; // parent : 6 (index 5) -> right = 2*5+1 = 11
    arr[12] = -1;
    arr[13] = -1;
    arr[14] = 5; // parent : 9 (index 7) -> left : 2*7 = 14
    arr[15] = -1;
}

void construct_tree_using_nodes() {
    PNode *root = new PNode(50);

    root->left = new PNode(17);
    root->right = new PNode(72);

    // 50->17
    root->left->left = new PNode(12);
    root->left->right = new PNode(23);

    // 50-72
    root->right->left = new PNode(54);
    root->right->right = new PNode(76);

    // 50->170->12
    root->left->left->left = new PNode(9);
    root->left->left->right = new PNode(14);

    // 50->72->54
    root->right->left->right = new PNode(67);
}

using namespace std;
int main() {

    int arr[4] = {-10, 1, 2, 0};
    cout << count_occurence(arr, 4, -1) << endl;;

    cout << "Mini Number : " << find_min(arr, 4) << endl;

    cout << "Is Sorted : " << is_sorted(arr, 4) << endl;

    int sorted_arr[4] = {0, 3, 3, 3};
    cout << "First Occur is sorted array :" << first_occurence(sorted_arr, 4, 3) << endl;
    cout << "Last Occur is sorted array :" << last_occurence(sorted_arr, 4, 3) << endl;

    cout << "=== Tree ===" << endl;
    test_tree();


    return 0;
}