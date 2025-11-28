#pragma once
#include <cstdlib>
#include <string>
#include <stdexcept>
using namespace std;

class Date {
private:
    int year = 0, month = 0, day = 0;

public:
    int getYear();
    void setYear(int year);

    int getMonth();
    void setMonth(int month);

    int getDay();
    void setDay(int day);

    static Date dateSum(Date d1, Date d2);
    static Date dateDiff(Date d1, Date d2);

    string displayDate();
};