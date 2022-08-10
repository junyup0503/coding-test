package programmers.lv01;

import java.util.ArrayList;
import java.util.List;

public class CountOfNumber {
	public static void main(String[] args) {
		int left = 27;
		int right = 100;
		int answer2 = 0;
		List<Integer> answer = new ArrayList<>();
		
		for(int i = left; i <= right; i++) {
			for(int a = 1; a <= i; a++) {
				if(i%a==0) {
					answer.add(a);
				}
			}
			if(answer.size()%2==0) {
				answer2 += i;
			}else {
				answer2 -= i;
			}
			answer.clear();
		}
		System.out.println(answer2);
	}

}
