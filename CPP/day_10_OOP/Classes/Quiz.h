#pragma once
#include "Evaluatable.h"
#include "LearningMaterial.h"

class Quiz : public LearningMaterial, public Evaluatable {
protected:
    int numberOfQuestions;

public:
    Quiz(string title, float duration, int numberOfQuestions, string uploadingDate)
        :DigitalContent(uploadingDate),
        LearningMaterial(title, duration, uploadingDate)
    {
        this->numberOfQuestions = numberOfQuestions;
    }

    string displayInfo() {
        return LearningMaterial::displayInfo() + "\nNumber Of Questions : " + to_string(numberOfQuestions);
    }

    void evaluate() {
        cout << "Here is how Quiz will evaluate questions" << endl;
    }
};