#pragma once
#include <string>
using namespace std;

class LearningMaterial {
protected:
    string title;
    float duration;
public:
    LearningMaterial(string title, float duration) {
        this->title = title;
        this->duration = duration;
    }

    virtual string displayInfo() {
        return "Title : " + title + "\nDuration: " + to_string(duration);
    }
};
