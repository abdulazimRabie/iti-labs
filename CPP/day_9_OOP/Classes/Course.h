#pragma once
#include <vector>
#include "LearningMaterial.h"
#include "Article.h"
#include "Quiz.h"
#include "VideoLesson.h"

using namespace std;

class Course {
protected:
    vector<LearningMaterial*> materials;

public:
    Course() = default;
    void addMaterial(LearningMaterial* newLearningMaterial) {
        materials.push_back(newLearningMaterial);
    }

    void showContent() const {
        for (int i = 0; i < materials.size(); i++) {
            cout << "Material " << (i + 1) << ":\n";
            cout << materials[i]->displayInfo() << endl;
            cout << "----------------------\n";
        }
    }

    ~Course() {
        for (auto & material : materials) {
            delete material;
        }
        materials.clear();
    }

};