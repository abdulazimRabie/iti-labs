#include "DT.h"
#include <cstdlib>
#include <string>
using namespace std;

int Date::getYear() {return year;}

void Date::setYear(int year) {
    if (year <= 0) throw runtime_error("Invalid year");
    this->year = year;
}

int Date::getMonth() {return month;}

void Date::setMonth(int month) {
    if (month <= 0 || month > 12) throw runtime_error("Invalid month");
    this->month = month;
}

int Date::getDay() {return day;}

void Date::setDay(int day) {
    if (day <= 0 || day > 30) throw runtime_error("Invalid day");
    this->day = day;
}

Date Date::dateSum(Date d1, Date d2) {
    Date result;
    int newYear = 0, newMonth = 0, newDay = 0;

    newDay = d1.getDay() + d2.getDay();
    while (newDay > 30) {
        newMonth += 1;
        newDay -= 30;
    }

    newMonth = d1.getMonth() + d2.getMonth();
    while (newMonth > 12) {
        newYear += 1;
        newMonth = newMonth - 12;
    }

    newYear += d1.getYear() + d2.getYear();

    result.setYear(newYear);
    result.setMonth(newMonth);
    result.setDay(newDay);

    return result;
}

Date Date::dateDiff(Date d1, Date d2) {
    Date result;
    result.setYear(abs(d1.getYear() - d2.getYear()));
    result.setMonth(abs(d1.getMonth() - d2.getMonth()));
    result.setDay(abs(d1.getDay() - d2.getDay()));

    return result;
}

string Date::displayDate() {
    return to_string(this->year) + "-" + to_string(this->month) + "-" + to_string(this->day);
}