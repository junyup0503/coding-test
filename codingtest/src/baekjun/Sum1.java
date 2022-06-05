package baekjun;

public class Sum1 {
	long sum(int[] a) {
		long ans = 0;
		for (int b = 0; b < a.length; b++) {
			ans += a[b];
		}
		return ans;
	}

	public static void main(String[] args) {
		Sum1 s1 = new Sum1();
		int[] arr = new int[] {12, 13, 15, 1, 3};
		s1.sum(arr);
		System.out.println(s1.sum(arr));
	}
}
