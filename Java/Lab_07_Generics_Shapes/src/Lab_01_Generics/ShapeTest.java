package Lab_01_Generics;
import java.util.*;

public class ShapeTest {
    public static void drawShape(List<? extends Shape> lists) {
        lists.forEach(shape -> shape.draw());
    }
    public static void main() {
        List<Circle> circle = new ArrayList<>();
        circle.add(new Circle());
        circle.add(new Circle());
        circle.add(new Circle());
        circle.add(new Circle());

        List<Rectangle> rectangles = new ArrayList<>();
        rectangles.add(new Rectangle());
        rectangles.add(new Rectangle());
        rectangles.add(new Rectangle());
        rectangles.add(new Rectangle());

        drawShape(circle);

        System.out.println("====");

        drawShape(rectangles);

    }
}
