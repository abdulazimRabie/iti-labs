public class Main {
    static void main() {
        String str = "ITI develops people and ITI house of developers and ITI fo people";

        String[] words = str.split(" ");
        int count = 0;
        for(String word : words) {
            if (word.equals("ITI")) count++;
        }

        String IP = "41.33.92.146";
        String[] parts = IP.split(".");
        System.out.println(parts.toString());
    }
}