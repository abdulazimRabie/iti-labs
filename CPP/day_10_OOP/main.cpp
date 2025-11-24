#include <iostream>
#include <vector>
#include "Classes/LearningMaterial.h"
#include "Classes/Article.h"
#include "Classes/VideoLesson.h"
#include "Classes/Quiz.h"
#include "Classes/Evaluatable.h"
#include "Classes/Sharable.h"

int main() {

    // Article a("Article title", 12, 300, "12-1-2020");
    // cout << a.displayInfo() << endl;

    vector<LearningMaterial*> materials;

    materials.push_back(new VideoLesson(720, "C++ OOP Video", 30, "2025-02-01"));
    materials.push_back(new Article("Solid Principles Guide", 20, 90, "2025-01-15"));
    materials.push_back(new Quiz("OOP Quiz", 30, 8,"2025-02-05"));

    cout << "=== Displaying All Materials ===\n";
    for (auto m : materials) {
        cout << m->displayInfo() << endl;
        cout << "===== ===== ====" << endl;
    }

    vector<Evaluatable*> evals;
    evals.push_back(new Quiz("Evaluatable Quiz", 40, 70, "12-1-2020"));

    for (auto e : evals) {
        e->evaluate();
    }


    Sharable* s = new VideoLesson(420, "Sharable Video", 10, "2025-02-01");
    s->Share();


    // Evaluatable e; // Abstract Cannot be intiated
    return 0;
}