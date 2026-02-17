package Lab_02_ComlexNumber;

import java.math.BigDecimal;

public class ComplexNumber<T extends Number> {
    private T real;
    private T img;

    public ComplexNumber(T r , T i) {
        this.real = r;
        this.img = i;
    }

    public T getReal() {
        return this.real;
    }

    public T getImg() {
        return this.img;
    }

//    public ComplexNumber<Double, Double> add(ComplexNumber<T, R> other) {
//        return new ComplexNumber<>(
//                this.real.doubleValue() + other.getReal().doubleValue(),
//                this.img.doubleValue() + other.getImg().doubleValue()
//        );
//
//        return new_cn;
//    }

    public void printComplex() {
        System.out.println(this.real + " + " + this.img + "i");
    }
}
