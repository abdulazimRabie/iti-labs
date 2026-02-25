package org.example;

public class Player {
    public String name;
    public int id;
    public int age;

    @Override
    public String toString() {
        return "Player #" + id + "\n- name: " + name + "\n- age: " + age + "\n";
    }
}
