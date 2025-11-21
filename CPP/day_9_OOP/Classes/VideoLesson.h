#pragma once
#include <string>
#include "LearningMaterial.h"
using namespace std;

class VideoLesson : public LearningMaterial{
protected:
    int resolution = 0;

public:
    VideoLesson(int resolution, string title, float duration)
    :LearningMaterial(title, duration) {
        this->resolution = resolution;
    }

    string displayInfo() {
        return LearningMaterial::displayInfo() + "\nResolution: " + to_string(resolution);
    }
};