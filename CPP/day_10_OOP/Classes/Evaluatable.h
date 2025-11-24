#pragma once
class Evaluatable {
public:
    virtual void evaluate() = 0;
    virtual ~Evaluatable() {}
};
