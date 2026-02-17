import java.util.Objects;
import java.util.Scanner;

public class Lab_01 {
    public static void main(String args[]) {

        // 1.
        System.out.println("Hi everyone");

        // 2.
        Scanner scanner = new Scanner(System.in);

        String userValue = scanner.next();
        if (Objects.equals(userValue, "user")) {
            System.out.println("Great !! User input is " + userValue);
        } else {
            System.out.println("OOOPS : " + userValue);
        }

        // 3.
        scanner.nextLine();
        System.out.println("Enter text : ");
        String text = scanner.nextLine();

        System.out.println("How many times to print : ");
        int times = scanner.nextInt();

        for(int i = 0; i < times; i++) {
            System.out.println(text);
        }
    }
}
