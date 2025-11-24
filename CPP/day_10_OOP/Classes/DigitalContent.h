#pragma once
#include <iostream>
#include <string>
using namespace std;

class DigitalContent {
protected:
    string uploadDate;
public:
    DigitalContent(string date) : uploadDate(date) {}
    virtual ~DigitalContent() {}
};
