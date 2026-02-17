package EmpFactory;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class RunFactory {
    public static void main() {
        //    int[] values = {3, 10, 12, 4, 9, 0, 19, 77};
//
//    IntStream.of(values).forEach(value -> System.out.println("val : " + value));
//    System.out.println("Count of values " + IntStream.of(values).count());
//    System.out.println("Min of values " + IntStream.of(values).min().getAsInt());
//    System.out.println("Max of values " + IntStream.of(values).max());

        int[] empId = {1, 11, 0, 20};

        EmployeeRepository repo = new EmployeeRepository();
//        List<Employee> found_emps = Arrays.stream(empId).mapToObject(repo::findById).collect(Collectors.toList());
    }
}
