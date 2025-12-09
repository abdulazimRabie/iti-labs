#include <iostream>
#include "tree.h"
#include "graph.h"
using namespace std;

int main() {
    Node* root = nullptr;

    // Insert
    cout << "Inserting: 50, 30, 70, 20, 40, 60, 80" << endl;
    insert(root, 50);
    insert(root, 30);
    insert(root, 70);
    insert(root, 20);
    insert(root, 40);
    insert(root, 60);
    insert(root, 80);

    cout << "Inorder: ";
    inorder(root);
    cout << endl;

    cout << "Preorder: ";
    preorder(root);
    cout << endl;

    cout << "Postorder: ";
    postorder(root);
    cout << endl;

    // Delete
    cout << "\nDeleting node 20:" << endl;
    deleteNode(root, 20);
    cout << "Inorder: ";
    inorder(root);
    cout << endl;

    cout << "\nDeleting node 30:" << endl;
    deleteNode(root, 30);
    cout << "Inorder: ";
    inorder(root);
    cout << endl;

    cout << "\nDeleting node 50:" << endl;
    deleteNode(root, 50);
    cout << "Inorder: ";
    inorder(root);
    cout << endl;

    // Array to Tree (first element is root)
    cout << "\nArray to BST: {15, 10, 20, 8, 12, 25, 5}" << endl;
    int arr1[] = {15, 10, 20, 8, 12, 25, 5};
    arrayToTree(root, arr1, 7);
    cout << "Inorder: ";
    inorder(root);
    cout << endl;

    // Sorted array to balanced BST (mid is root)
    cout << "\nSorted Array to Balanced BST: {15, 10, 20, 8, 12, 25, 5}" << endl;
    int arr2[] = {15, 10, 20, 8, 12, 25, 5};
    sortedArrayToBST(root, arr2, 7);
    cout << "Inorder: ";
    inorder(root);
    cout << endl;
    cout << "Preorder: ";
    preorder(root);
    cout << " (notice root is mid value)" << endl;

    // Test graphs
    test_graph();
    return 0;
}