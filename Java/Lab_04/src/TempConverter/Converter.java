package TempConverter;

import java.util.function.Function;

public class Converter {
    public static double work(int degree) {
        Function<Integer, Double> c_to_f = (c) -> (double) ((c * 9 / 5) + 32);
        return c_to_f.apply(degree);
    }
}
