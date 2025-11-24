#pragma once
#include <string>
#include "LearningMaterial.h"
#include "DigitalContent.h"
#include "Sharable.h"
using namespace std;

class VideoLesson : public LearningMaterial, public Sharable {
protected:
    int resolution = 0;

public:
    VideoLesson(int resolution, string title, float duration, string uploadingDate)
    :DigitalContent(uploadingDate),
    Sharable(uploadingDate),
    LearningMaterial(title, duration, uploadingDate) {
        this->resolution = resolution;
    }

    string displayInfo() {
        return LearningMaterial::displayInfo() + "\nResolution: " + to_string(resolution);
    }

    void Share() {
        cout << "[Sharable Content From VideoLesson] Sharing material uploaded on: " << uploadDate << "\n";
    }
};