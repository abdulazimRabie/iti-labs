package Lab_01;

import java.util.function.BiConsumer;
import java.util.function.Function;

public class StringUtils {
    public static String betterString(String str1, String str2, TwoStringPredicate predicateStrings) {
        if (predicateStrings.test(str1, str2)) return str1;
        return str2;
    }
}
