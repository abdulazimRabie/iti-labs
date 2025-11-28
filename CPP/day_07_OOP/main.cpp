#include <iostream>
#include <vector>
#include "Classes/Product/Product.h"
#include "Classes/Auditor/Auditor.h"

void handleUserInputs(vector<Product*> &products) {
    string name;
    int quantity;
    double price;
    cout << "New Product to add : " << endl;
    do {
        cout << "Name : ";
        cin >> name;
    } while (name.empty());

    do {
        cout << "Price : ";
        cin >> price;
    } while (price < 0);

    do {
        cout << "Quantity : ";
        cin >> quantity;
    } while (quantity < 0);

    try {
        Product *newP = new Product(name, price, quantity);
        products.push_back(newP);
    } catch (exception &e) {
        cout << e.what() << endl;
    }

}
// TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
int main() {
    Product p1;
    Product p2("Laptop", 25000, 5);
    Product p3 = p2;   // copy constructor

    // Modifty name, price, quantity of p1
    p1.setName("Jackets");
    // p1.setPrice(-10); // throw error
    p1.setPrice(300);
    p1.setQuantity(20);

    vector<Product *> products;
    products.push_back(&p1);
    products.push_back(&p2);
    products.push_back(&p3);

    cout << Product::getProductCount() << endl;

    for (int i = 3; i < 5; i++) {
        handleUserInputs(products);
    }

    Auditor aud;
    long double totalInventoryValue = 0.0;
    long double totalInventoryValueAfterTax = 0.0;

    for (int i = 0; i < products.size(); i++) {
        totalInventoryValue += products[i]->calculateTotalPrice();
        totalInventoryValueAfterTax += products[i]->calculatePriceWithTax(0.24);

        aud.auditProduct(*products[i]);
    }

    cout << "========================" << endl;
    cout << "Total inventory value (before tax): " << totalInventoryValue << endl;
    cout << "Total inventory value (after tax): " << totalInventoryValueAfterTax << endl;

    cout << Product::getProductCount() << endl;

    for (int i = 3; i < 5; i++) {
        delete products[i];
    }
    return 0;
}