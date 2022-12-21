public class Test {
    long sum(int[] a) {
		long ans = 0;
		for (int b = 0; b < a.length; b++) {
			ans += a[b];
		}
		return ans;
    }
}
