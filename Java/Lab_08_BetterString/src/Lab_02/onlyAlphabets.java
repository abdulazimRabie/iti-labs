package Lab_02;

import java.util.Arrays;

public class onlyAlphabets {
    public static void main() {
        String text = "only alphabef32ts 12";
        text = text.trim();

        String[] words = text.split(" ");

        for(String word : words) {
            for(int i = 0; i < word.length(); i++) {
                Character ch = word.charAt(i);
                if (!Character.isLetter(ch)) {
                    System.out.println("Text contains NON alphabets");
                    return;
                }
            }
        }

        System.out.println("Text is valid ...... contrinue");;
    }
}
