import java.io.IOException;

public class LearningExceptions {
    public static void readFile() throws IOException {
        System.out.println("This method doesn't read file, but throw error directly!!");
        throw new IOException("Cannot read file, I know u r right, sorry !");
    }
    public static void main(String args[]) {
        /*
        try {
            int[] arr = new int[3];
            arr[4] = 4;
        } catch (ArithmeticException arithmeticE) {
            System.out.println(arithmeticE.getMessage());
        } catch (ArrayIndexOutOfBoundsException outofboundsE) {
            System.out.println(outofboundsE.getMessage());
            outofboundsE.printStackTrace();
        } finally {
            System.out.println("All cases are handled!");
        }
        */

        /*
        try {
            readFile();
        } catch (IOException e) {
            System.out.println(e.getMessage());
            System.out.println(e.getClass().getName());
        }
         */

        SecondClass s_class = new SecondClass();
        s_class.try_method_one();
        s_class.try_method_two();
        s_class.try_method_three();
    }
}
