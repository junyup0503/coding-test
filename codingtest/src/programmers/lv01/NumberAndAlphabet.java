package programmers.lv01;

import java.util.HashMap;
import java.util.Map;

public class NumberAndAlphabet {
	public static void main(String[] args) {
		String s = "one4seveneight";
		Map<String, Integer> numberSet = new HashMap<>();
		numberSet.put("zero", 0);
		numberSet.put("one", 1);
		numberSet.put("two", 2);
		numberSet.put("three", 3);
		numberSet.put("four", 4);
		numberSet.put("five", 5);
		numberSet.put("six", 6);
		numberSet.put("seven", 7);
		numberSet.put("eight", 8);
		numberSet.put("nine", 9);
		for(String aa : numberSet.keySet()) {
			if(s.contains(aa)) {
				System.out.println(aa);
				System.out.println(String.valueOf(numberSet.get(aa)));
				s = s.replaceAll(aa, String.valueOf(numberSet.get(aa)));
			}
		}
		System.out.println(Integer.parseInt(s));
	}
}
