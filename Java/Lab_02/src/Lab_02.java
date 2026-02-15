import java.util.Arrays;

public class Lab_02 {
    public static void findMinUsingBinarySearch(int[] arr, int target_value) {
        Arrays.sort(arr);
        int l = 0,
            r = arr.length - 1;

        long start = System.nanoTime();

        while(r > l) {
            int mid = (r-l)/2 + l;
            if (arr[mid] == target_value) {
                long end = System.nanoTime();
                System.out.println("Target Value at index : " + mid);
                System.out.println("Needed time to find target value : " + (end-start));
                return;
            }

            else if (arr[mid] > target_value) {
                r = mid - 1;
            }

            else {
                l = mid + 1;
            }
        }

        System.out.println("Target Value is not exist in array");
        System.out.println("Time needed to find target value : " + (System.nanoTime() - start));
    }

    public static void main(String args[]) {
        int[] arr = new int[1000];
        arr[0] = 1000;
        arr[1] = 300;
        arr[2] = -20;
        arr[40] = 3410;
        arr[987] = -13;

        long startTime = System.nanoTime();

        int min = arr[0];
        for(int i = 1; i < arr.length; i++) {
            if (arr[i] < min) min = arr[i];
        }

        long endTime = System.nanoTime();

        System.out.println("Min Value : " + min);
        System.out.println("Time Consumed : " + (endTime-startTime));


        System.out.println("================================");
        findMinUsingBinarySearch(arr, -20);
    }
}
