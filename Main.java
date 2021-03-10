import java.util.Scanner;
public class Main {

  private static Scanner scan;

  public static void main(String[] args) {
    scan = new Scanner(System.in);

System.out.print(" Please Enter a : ");
 int a=scan.nextInt();
 System.out.print(" Please Enter b : ");
 int b=scan.nextInt();
 int evensum = 0;
 

 for (int i = a; i < b; i++) {
     if (i % 2 == 0) {
         evensum = evensum + i;
     }
     
 }
  System.out.println(evensum);
  
}
}












