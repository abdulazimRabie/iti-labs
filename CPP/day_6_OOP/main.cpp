#include <iostream>
#include "Services/RemoteControl/RC.h"
#include "Services/Date/DT.h"
using namespace std;

void test_remote_control() {
    RemoteControl rc;
    rc.setBrand("Jack");
    rc.changeChannel("BeinSports");
    rc.increaseVolume();
    cout << rc.showStatus() << endl;
    rc.mute();
    cout << rc.showStatus() << endl;
}

void test_date() {
    Date d1;
    d1.setYear(2025);
    d1.setMonth(11);
    d1.setDay(14);


    Date d2;
    d2.setYear(2025);
    d2.setMonth(11);
    d2.setDay(20);

    Date sum = Date::dateSum(d1, d2);

    cout << d1.displayDate() << endl;
    cout << d2.displayDate() << endl;
    cout << sum.displayDate() << endl;
}

// TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
int main() {

    // test_remote_control();
    test_date();
    return 0;
}