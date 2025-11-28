#include "Product.h"
#include <iostream>
using namespace std;
int Product::productCount = 0;

Product::Product() {
    name = "UNKNOWN";
    price = 0;
    quantity = 0;

    productCode = ++productCount;
}

Product::Product(string name, double price, int quantity) {
    this->name = name;
    this->price = price;
    this->quantity = quantity;

    productCode = ++productCount;
}

Product::Product(Product& prod) {
    this->name = prod.getName();
    this->price = prod.getPrice();
    this->quantity = prod.getQuantity();

    productCode = ++productCount;
}

int Product::getProductCount() {
    return productCount;
}

// name getter-setter
void Product::setName(string name) {
    if (name.length() == 0) throw invalid_argument("Name cannot be empty!");
    this->name = name;
}
string Product::getName() {
    return this->name;
}

// price getter-setter
void Product::setPrice(double price) {
    if (price < 0) throw invalid_argument("Price cannot be negative");
    this->price = price;
}
double Product::getPrice() {
    return this->price;
}

// quantity getter-setter
void Product::setQuantity(int quantity) {
    if (quantity < 0) throw invalid_argument("Quantity cannot be negative");
    this->quantity = quantity;
}
int Product::getQuantity() {
    return this->quantity;
}

// calculate total price
double Product::calculateTotalPrice() {
    return this->quantity * this->price;
}

double Product::calculatePriceWithTax(double taxRate = 0.14) {
    return this->calculateTotalPrice() * taxRate;
}

void Product::printInfo() {
    cout << "Product : " << this->name
         << "\nPrice : " << this->price
         << "\nQuantity : " << this->quantity
         << "\nProductCode : " << this->productCode
         << "\nTotal Value : " << this->price * this->quantity
         << endl;
}


Product::~Product() {
    cout << "Product : " << this->productCode << " has been destroyed" << endl;
}