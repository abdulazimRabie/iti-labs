#include "SmartDevice.h"
#include <stdexcept>
#include <iostream>
using namespace std;

int SmartDevice::deviceCount = 0;
int SmartDevice::getDeviceCount() {
    return deviceCount;
};

SmartDevice::SmartDevice(string name, double powerLevel) {
    this->name = name;
    this->powerLevel = powerLevel;

    this->history = new int[3];
    this->energyConsumption = 0;

    ++deviceCount;
}

SmartDevice::SmartDevice(SmartDevice &other) {
    this->name = other.getName();
    this->powerLevel = other.getPowerLevel();
    this->history = new int[3];
    for (int i = 0; i < 3; i++) {
        this->history[i] = other.getHistory()[i];
    }

    this->energyConsumption = other.getEnergyConsumption();
    ++deviceCount;
}

SmartDevice SmartDevice::operator++() {
    double newPowerLevel = powerLevel + 5;
    this->setPowerLevel(newPowerLevel);

    return *this;
};

double SmartDevice::operator+(const SmartDevice& other) const {
    return this->energyConsumption + other.energyConsumption;
}

ostream& operator<<(ostream& os, const SmartDevice& device) {
    os << "Device Name: " << device.name << "\n"
       << "Power Level: " << device.powerLevel << "%\n"
       << "Energy Consumption: " << device.energyConsumption << " kWh\n"
       << "History: [" << device.history[0] << ", "
       << device.history[1] << ", "
       << device.history[2] << "]";
    return os;
}

string SmartDevice::getName() {
    return this->name;
};
void SmartDevice::setName(string name) {
    if (name.empty()) throw invalid_argument("Smart device name cannot be empty!");
    this->name = name;
};

// powerLevel
double SmartDevice::getPowerLevel() {
    return this->powerLevel;
};
void SmartDevice::setPowerLevel(double powerLevel) {
    if (powerLevel < 0 || powerLevel > 100) throw invalid_argument("Power level in range 0-100");
    this->powerLevel = powerLevel;
};

// energy consumption
double SmartDevice::getEnergyConsumption() {
  return this->energyConsumption;
};

void SmartDevice::addConsumption(double val) {
    this->energyConsumption = val;

}

// history
int* SmartDevice::getHistory() {
    return this->history;
};
void SmartDevice::setHistory(int* history) {
    this->history = history;
};


SmartDevice::~SmartDevice() {
    delete[] this->history;
}

