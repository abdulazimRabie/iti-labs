#pragma once
#include "LearningMaterial.h"

class Article : public LearningMaterial {
protected:
    int pageNumbers;

public:
    Article(string title, float duration, int pageNumbers, string uploadingDate)
    : DigitalContent(uploadingDate)
    ,LearningMaterial(title, duration, uploadingDate) {
        this->pageNumbers = pageNumbers;
    }

    string displayInfo() {
        return LearningMaterial::displayInfo() + "\nPage Number : " + to_string(pageNumbers);
    }
};