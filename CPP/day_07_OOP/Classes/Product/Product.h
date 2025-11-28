#pragma once
#include <string>
#include <stdexcept>
#include "../Auditor/Auditor.h"

using namespace std;
class Product {
private:
    string name;
    int quantity;
    double price;

    static int productCount;
    int productCode;

    friend class Auditor;

public:

    Product();

    Product(string name, double price, int quantity);

    Product(Product& prod);

    // productCount
    static int getProductCount();

    // name
    void setName(string name);
    string getName();

    // price
    void setPrice(double price);
    double getPrice();

    // quantity
    void setQuantity(int quantity);
    int getQuantity();

    // calculations
    double calculateTotalPrice();
    double calculatePriceWithTax(double taxRate);


    // utils
    void printInfo();
    ~Product();

};
