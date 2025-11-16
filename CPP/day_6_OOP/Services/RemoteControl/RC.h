#pragma once
#include <string>
using namespace std;

class RemoteControl {
private:
    string brand = "NONE";
    int volume = 0;

public:
    string channel = "NONE";
    void setBrand(string b);
    string getBrand();

    int increaseVolume();
    int getVolume();

    void changeChannel(string newChannel);

    void mute();

    string showStatus();
};