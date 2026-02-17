package EmpFactory;

public class Employee {
    // Private data members
    private int id;
    private String name;
    private double salary;

    // Constructor to initialize the object
    public Employee(int id, String name, double salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    // --- Getters (to access private data) ---
    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public double getSalary() {
        return salary;
    }

    // --- Setters (to modify private data safely) ---
    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSalary(double salary) {
        if (salary > 0) { // Example of why private + setters is good: Validation!
            this.salary = salary;
        }
    }
}