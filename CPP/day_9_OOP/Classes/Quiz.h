#pragma once
#include "LearningMaterial.h"

class Quiz : public LearningMaterial {
protected:
    int numberOfQuestions;

public:
    Quiz(string title, float duration, int numberOfQuestions)
    : LearningMaterial(title, duration) {
        this->numberOfQuestions = numberOfQuestions;
    }

    string displayInfo() {
        return LearningMaterial::displayInfo() + "\nNumber Of Questions : " + to_string(numberOfQuestions);
    }
};