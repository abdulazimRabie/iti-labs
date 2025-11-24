#pragma once
#include <string>

using namespace std;
class SmartDevice {
private:
    string name;
    double powerLevel;
    double energyConsumption;
    int* history;
    static int deviceCount;
public:

    SmartDevice(string name, double powerLevel);

    SmartDevice(SmartDevice &other);

    SmartDevice operator++();

    double operator+(const SmartDevice& other) const;

    friend ostream& operator<<(ostream& os, const SmartDevice& device);

    //name
    string getName();
    void setName(string name);

    // powerLevel
    double getPowerLevel();
    void setPowerLevel(double powerLevel);

    // energy consumption
    double getEnergyConsumption();
    void addConsumption(double);
    // void setEnergyConsumption(double ener)

    // history
    int* getHistory();
    void setHistory(int* history);;

    static int getDeviceCount();


    ~SmartDevice();
};