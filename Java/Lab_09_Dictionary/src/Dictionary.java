import java.util.*;

public class Dictionary {
    private Map<Character, TreeSet<String>> dictionary;

    public Dictionary() {
        this.dictionary = new HashMap<>();
    }

    /**
     * This function returns {@code true} if word starts with alphabetic
     * Store words in dictionary based on first character {@code charAt(0)}
     * Handle case of empty string and return {@code false}
     * @return
     */
    public boolean addWord(String word) {
        if (word.isEmpty() || !Character.isLetter(word.charAt(0)))
            return false;

        Character letter = word.charAt(0);

        if (dictionary.containsKey(letter)) {
            TreeSet<String> words = dictionary.get(letter);
            words.add(word);
            dictionary.put(letter, words);
        } else {
            TreeSet<String> words = new TreeSet<>();
            words.add(word);
            dictionary.put(letter, words);
        }

        return true;
    }

    public TreeSet<String> getWords(Character letter) {
        if (dictionary.containsKey(letter)) {
            return dictionary.get(letter);
        }
        return null;
    }

    public void printWordsOf(Character letter) {
        if (dictionary.containsKey(letter)) {
            dictionary.get(letter).forEach(word -> System.out.println(word));
        } else {
            System.out.println("Dictionary doesn't have letter '" + letter + "' Yet!");
        }
    }

    public void printDictionary() {
        if (!dictionary.isEmpty()) {
            dictionary.forEach((letter , words) -> System.out.println(letter + " : " + words));
        }
    }


    /*
        charAt(0) : gets first character
        based on first character
            - check if the key is existed
            - yes : update the set and add the word to TreeSet
            - no : put new key-value pairs character : {word}
     */


}