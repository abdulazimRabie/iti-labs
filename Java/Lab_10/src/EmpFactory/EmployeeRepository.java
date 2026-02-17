package EmpFactory;

import java.util.*;

public class EmployeeRepository {

    List<Employee> emps = new ArrayList<>();

    public EmployeeRepository() {
        emps.add(new Employee(1, "Azim", 33.4));
        emps.add(new Employee(11, "Nader", 22.4));
        emps.add(new Employee(12, "Mazen", 13.4));
        emps.add(new Employee(13, "Wael", 3033.4));
    }

    public Employee findById(int id) {
        final int id_c = id;
        return emps.stream()
                   .filter(e -> e.getId() == id_c)
                   .findFirst()
                   .orElse(null);
    }
}
