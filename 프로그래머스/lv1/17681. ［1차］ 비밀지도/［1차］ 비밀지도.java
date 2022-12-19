import java.util.ArrayList;
import java.util.List;

class Solution {
    public String[] solution(int n, int[] arr1, int[] arr2) {
        List<String> answer = new ArrayList<>();
		for(int i = 0; i < n; i++) {
			String temp = Integer.toBinaryString(arr1[i]|arr2[i]);
			System.out.println(temp);
			StringBuffer tempString = new StringBuffer();
			if(temp.length()<n) {
				int zeroCount = n-temp.length();
				StringBuffer zero = new StringBuffer();
				for(int q = 0; q<zeroCount; q++) {
					zero.append("2");
				}
				tempString.append(zero);
				System.out.println(zero);
			}
			answer.add((tempString.toString()+""+temp).replaceAll("1", "#").replaceAll("2", " ").replaceAll("0"," "));
		}
        return answer.toArray(new String[answer.size()]);
    }
}