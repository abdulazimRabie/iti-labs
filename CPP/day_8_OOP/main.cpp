#include <iostream>

#include "Classes/SmartDevice/SmartDevice.h"
#include "Classes/Room/Room.h"

using namespace std;
int main() {
    // Room livingRoom("Living Room");
    //
    SmartDevice tv("Samsmung", 50);
    SmartDevice ac("Air conditioner", 30);
    SmartDevice lamp("Smart Lamp", 80);

    tv.addConsumption(40.5);
    ac.addConsumption(30);
    lamp.addConsumption(80);
    //
    // // cout << tv << endl;
    // // cout << "====" << endl;
    // // cout << ac << endl;
    // // cout << "====" << endl;
    // // cout << lamp << endl;
    //
    // cout << "Devices Count : " << SmartDevice::getDeviceCount() << endl;
    //
    //
    // cout << "test" << endl;
    // livingRoom.addSmartDevice(tv);
    // livingRoom.addSmartDevice(ac);

    // livingRoom.PrintDevices();


    return 0;
}