package baekjun;

public class Fibonacci {
	public static void main(String[] args) {
		int a = 10;
		
		for(int i = 0; i<a; i++) {
			System.out.println((i) + "번째 : " + fibonacci(i));
		}
		
	}
	
	public static int fibonacci(int n) {
		if(n==0) {
			return 0;
		}
		if(n==1 || n==2) {
			return 1;
		}
		return fibonacci(n-1)+fibonacci(n-2);
	}

}
