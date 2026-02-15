public class SecondClass {
    public FirstClass f_class = new FirstClass();

    void try_method_one() {
        try {
            f_class.method_one();
        } catch (MyException e) {
            System.out.println(e.getMessage());
            System.out.println(e.getClass().getName());
        } finally {
            System.out.println("Method one tested !!!");
        }
    }

    void try_method_two() {
        try {
            f_class.method_two();
        } catch (MyException e) {
            System.out.println(e.getMessage());
        } finally {
            System.out.println("Method two tested !!!");
        }
    }

    void try_method_three() {
        try {
            f_class.method_three();
        } catch (MyException e) {
            System.out.println(e.getMessage());
        } finally {
            System.out.println("Method three tested !!!");
        }
    }
}
