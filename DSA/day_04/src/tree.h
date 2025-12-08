#include <cmath>
#include <vector>
using namespace std;

struct Node {
    int data;
    vector<Node*> children;

    Node(int val) :data(val) {};
};

struct PNode {
    int data;
    PNode* left;
    PNode* right;

    PNode(int val) : data(val), left(nullptr), right(nullptr) {};
};

int height(Node* root) {
    if (root->children.size() == 0) return 0;
    cout << "Node (" << root->data << ") : " << endl;

    int max_h = 0;
    for (int i = 0; i < root->children.size(); i++) {
        max_h = max(max_h, height(root->children[i]));
    }
    return 1 + max_h;
}

int count_nodes(Node* root) {
    if (root->children.size() == 0) return 1;
    cout << "Node (" << root->data << ") : " << endl;

    int count = 0;
    for (int i = 0; i < root->children.size(); i++) {
        count +=  count_nodes(root->children[i]);
    }
    return 1 + count;
}

