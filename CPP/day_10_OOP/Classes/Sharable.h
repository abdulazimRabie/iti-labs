#pragma once
#include <iostream>
#include "DigitalContent.h"
using namespace std;

class Sharable : public virtual DigitalContent {
public:
    Sharable(string date) : DigitalContent(date) {}

    virtual void Share() {
        cout << "[Sharable] Sharing material uploaded on: " << uploadDate << "\n";
    }
};
