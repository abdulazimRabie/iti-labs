#pragma once
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

struct Node {
    int data;
    Node* left;
    Node* right;

    Node(int val) : data(val), left(nullptr), right(nullptr) {}
};

void inorder(Node* root) {
    if (root == nullptr) return;
    inorder(root->left);
    cout << root->data << " ";
    inorder(root->right);
}

void preorder(Node* root) {
    if (root == nullptr) return;
    cout << root->data << " ";
    preorder(root->left);
    preorder(root->right);
}

void postorder(Node* root) {
    if (root == nullptr) return;
    postorder(root->left);
    postorder(root->right);
    cout << root->data << " ";
}

void insert(Node*& root, int val) {
    if (root == nullptr) {
        root = new Node(val);
        return;
    }

    if (val < root->data) {
        insert(root->left, val);
    } else {
        insert(root->right, val);
    }
}

Node* findMin(Node* root) {
    while (root->left != nullptr) {
        root = root->left;
    }
    return root;
}

void deleteNode(Node*& root, int val) {
    if (root == nullptr) {
        cout << "Node not found!" << endl;
        return;
    }

    if (val < root->data) {
        deleteNode(root->left, val);
    } else if (val > root->data) {
        deleteNode(root->right, val);
    } else {
        // Case 1: No children
        if (root->left == nullptr && root->right == nullptr) {
            delete root;
            root = nullptr;
        }
        // Case 2: One child
        else if (root->left == nullptr) {
            Node* temp = root;
            root = root->right;
            delete temp;
        } else if (root->right == nullptr) {
            Node* temp = root;
            root = root->left;
            delete temp;
        }
        // Case 3: Two children
        else {
            Node* temp = findMin(root->right);
            root->data = temp->data;
            deleteNode(root->right, temp->data);
        }
    }
}

void arrayToTree(Node*& root, int arr[], int size) {
    root = nullptr;
    for (int i = 0; i < size; i++) {
        insert(root, arr[i]);
    }
}

Node* sortedArrayToBSTHelper(int arr[], int start, int end) {
    if (start > end) return nullptr;

    int mid = start + (end - start) / 2;
    Node* node = new Node(arr[mid]);

    node->left = sortedArrayToBSTHelper(arr, start, mid - 1);
    node->right = sortedArrayToBSTHelper(arr, mid + 1, end);

    return node;
}

void sortedArrayToBST(Node*& root, int arr[], int size) {
    vector<int> sorted(arr, arr + size);
    sort(sorted.begin(), sorted.end());
    root = sortedArrayToBSTHelper(sorted.data(), 0, size - 1);
}