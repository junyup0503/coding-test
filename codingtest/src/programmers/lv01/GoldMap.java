package programmers.lv01;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class GoldMap {
	public static void main(String[] args) {
		int n = 5;
		int[] arr1 = {9, 20, 28, 18, 11};
		int[] arr2 = {30, 1, 21, 17, 28};
		List<String> answer = new ArrayList<>();
		for(int i = 0; i < n; i++) {
			String temp = Integer.toBinaryString(arr1[i]|arr2[i]);
			System.out.println(temp);
			StringBuffer tempString = new StringBuffer();
			if(temp.length()<n) {
				int zeroCount = n-temp.length();
				StringBuffer zero = new StringBuffer();
				for(int q = 0; q<zeroCount; q++) {
					zero.append("0");
				}
				tempString.append(zero);
				System.out.println(zero);
			}
			answer.add((tempString.toString()+""+temp).replaceAll("1", "#").replaceAll("0", " "));
		}
		String[] answer2 = answer.toArray(new String[answer.size()]);
		System.out.println(Arrays.asList(answer2));
	}
}
