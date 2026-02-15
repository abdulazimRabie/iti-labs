package Lab_01;

public class TestBetterString {
    public static void main() {
//        String str1 = "String one";
        String str1 = "e";
        String str2 = "Str two";

        String longer = StringUtils.betterString(str1, str2, (s1, s2) -> s1.length() > s2.length());

        System.out.println(longer);
    }
}
