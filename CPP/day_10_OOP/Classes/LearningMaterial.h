#pragma once
#include <string>
#include "DigitalContent.h"
using namespace std;

class LearningMaterial : public virtual DigitalContent {
protected:
    string title;
    float duration;
public:
    LearningMaterial(string title, float duration, string uploadingDate)
        :DigitalContent(uploadingDate){
        this->title = title;
        this->duration = duration;
    }

    virtual string displayInfo() {
        return "Title : " + title + "\nDuration: " + to_string(duration) + "\nUploading Date : " + this->uploadDate;
    }
};
