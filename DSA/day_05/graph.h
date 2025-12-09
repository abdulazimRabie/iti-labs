#pragma once
#include <iostream>
#include <vector>
#include <list>
#include <queue>
using namespace std;

void addEdgeMatrix(vector<vector<int>>& graph, int src, int dest) {
    graph[src][dest] = 1;
    graph[dest][src] = 1; // Undirected
}

void addEdgeList(vector<list<int>>& graph, int src, int dest) {
    graph[src].push_back(dest);
    graph[dest].push_back(src); // Undirected
}

void show_graph_bfs(const vector<list<int>>& graph, int start) {
    vector<bool> visited(graph.size(), false);
    queue<int> q;

    visited[start] = true;
    q.push(start);

    cout << "BFS from vertex " << start << ": ";
    while (!q.empty()) {
        int curr = q.front();
        q.pop();
        cout << curr << " ";

        for (int neighbor : graph[curr]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                q.push(neighbor);
            }
        }
    }
    cout << endl;
}

void test_graph() {
    cout << "adjacency matric : " << endl;

    vector<vector<int>> graphMatrix(5, vector<int>(5, 0));

    cout << "adding edges: (0,1), (0,4), (1,2), (1,3), (2,3)" << endl;
    addEdgeMatrix(graphMatrix, 0, 1);
    addEdgeMatrix(graphMatrix, 0, 4);
    addEdgeMatrix(graphMatrix, 1, 2);
    addEdgeMatrix(graphMatrix, 1, 3);
    addEdgeMatrix(graphMatrix, 2, 3);

    cout << "\nMatrix:\n   ";
    for (int i = 0; i < 5; i++) cout << i << " ";
    cout << endl;
    for (int i = 0; i < 5; i++) {
        cout << i << ": ";
        for (int j = 0; j < 5; j++) {
            cout << graphMatrix[i][j] << " ";
        }
        cout << endl;
    }

    cout << "adjacency list : " << endl;

    vector<list<int>> graphList(5);

    cout << "Adding edges: (0,1), (0,4), (1,2), (1,3), (2,3)" << endl;
    addEdgeList(graphList, 0, 1);
    addEdgeList(graphList, 0, 4);
    addEdgeList(graphList, 1, 2);
    addEdgeList(graphList, 1, 3);
    addEdgeList(graphList, 2, 3);

    cout << "list:" << endl;
    for (int i = 0; i < 5; i++) {
        cout << i << ": ";
        for (int neighbor : graphList[i]) {
            cout << neighbor << " -> ";
        }
        cout << "NULL" << endl;
    }

    cout << endl;
    show_graph_bfs(graphList, 0);
}