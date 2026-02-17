public class Main {
    public static void main() {
        Dictionary dic = new Dictionary();

        if (dic.addWord("abdelazim")) {
            System.out.println("abdelazim added successfully!!");
        }
        dic.addWord("apple");
        dic.addWord("Ananas");

        dic.addWord("rabie");

        if (dic.addWord("1rabit")); {
            System.out.println("Cannot add 1rabit");
        }

        dic.getWords('a').forEach(System.out::println);

        dic.printWordsOf('A');

        dic.printDictionary();
    }
}