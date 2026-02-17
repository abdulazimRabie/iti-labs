import java.util.Arrays;
import java.util.StringTokenizer;

public class Main {
    static void main() {

        /* Occurence of ITI */
        String str = "ITI develops people and ITI house of developers and ITI fo people";

        // 1. first way
        String[] words = str.split(" ");
        int count = 0;
        for(String word : words) {
            if (word.equals("ITI")) count++;
        }
        System.out.println("Occurence of ITI in scentence : " + count);

        // 2. second way
        int start_index = 0,
            occurence_2 = 0;
        while(str.indexOf("ITI", start_index) != -1) {
            System.out.println("ITI at : " + str.indexOf("ITI", start_index));
            occurence_2++;
            start_index = str.indexOf("ITI", start_index) + 3;
        }
        System.out.println("occurrence of ITI : " + occurence_2);


         /* IP */
        //        StringTokenizer ip = new StringTokenizer("41.33.92.126", ".");
        //        System.out.println(ip.nextToken());
        //        System.out.println(ip.nextToken());
        //        System.out.println(ip.nextToken());
        //        System.out.println(ip.nextToken());
        //        System.out.println(ip.nextToken());

        String IP = "41.33.92.126";
        String[] parts = IP.split("\\.");
        System.out.println(Arrays.toString(parts));
    }
}