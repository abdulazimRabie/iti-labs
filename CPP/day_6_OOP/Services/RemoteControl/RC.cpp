#include "RC.h"
void RemoteControl::setBrand(string b) {
    this->brand = b;
}

string RemoteControl::getBrand() {
    return brand;
}

int RemoteControl::increaseVolume() {
    return ++volume;
}

int RemoteControl::getVolume() {
    return this->volume;
}

void RemoteControl::changeChannel(string newChannel) {
    this->channel = newChannel;
}

void RemoteControl::mute() {
    this->volume = 0;
}

string RemoteControl::showStatus() {
    return "Channel : " + this->channel + "\nVolume : " + to_string(this->volume);
}