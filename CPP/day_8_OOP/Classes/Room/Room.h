#include <vector>
#include <string>
#include "../SmartDevice/SmartDevice.h"

using namespace std;

class Room {
private:
    string roomName;
    // vector<SmartDevice*> devices; // aggregation
    SmartDevice *devices;
    int devicesCount;
public:
    Room();

    Room(string name);

    int getDevicesCount();

    void addSmartDevice(SmartDevice &device);

    double CalculateTotalConsumption();

    void PrintDevices();

    ~Room();
};