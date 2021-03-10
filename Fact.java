
    import java.util.Scanner;
public class Fact {
    
  private static Scanner scan;

  public static void main(String[] args) {
    scan = new Scanner(System.in);

System.out.print(" Please Enter a : ");
 int a=scan.nextInt();
 int factorial = 1;
 for (int i = 1; i <= a; i++) {
     factorial = factorial*i;
 }
 
  System.out.println("Factorial:" + factorial);
}
}




