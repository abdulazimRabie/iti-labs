#include <iostream>
#include "Auditor.h"

using namespace std;

void Auditor::auditProduct(Product& c) {
    cout << "=== PRODUCT REPORT ==="
         << "\nProduct : " << c.name
         << "\nPrice : " << c.price
         << "\nQuantity : " << c.quantity
         << "\nProductCode : " << c.productCode << c.name[0]
         << "\nTotal Value : " << c.price * c.quantity
         << endl;
}
