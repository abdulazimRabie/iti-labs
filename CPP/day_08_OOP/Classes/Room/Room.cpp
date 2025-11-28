#include <iostream>
#include <stdexcept>
#include "Room.h"

// static members
int Room::getDevicesCount() {
    return this->devicesCount;
}

Room::Room() {
    this->devicesCount = 0;
    this->roomName = "UnknownRoomName";
};

Room::Room(string name) {
    this->devicesCount = 0;
    this->roomName = name;
} ;

double Room::CalculateTotalConsumption() {
    double total = 0;
    for (int i = 0; i < this->devicesCount; i++) {
        total += this->devices[i].getEnergyConsumption();
    }

    return total;
};

void Room::addSmartDevice(SmartDevice &device) {
    if (this->devicesCount < 3) {
        this->devices[this->devicesCount++] = device;
    }
    // this->devices.push_back(&device);
}

void Room::PrintDevices() {
    cout << this->roomName << " Contains : " << endl;
    for (int i = 0; i < devicesCount; i++) {
        cout << devices[i] << endl;
        cout << "===== ==== ====" << endl;
    }
};

Room::~Room() {
    delete devices;
}