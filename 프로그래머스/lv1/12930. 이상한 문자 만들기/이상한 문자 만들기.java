import java.util.Scanner;

class Solution {
    public String solution(String s) {
        StringBuilder answer2 = new StringBuilder();
        if(s.startsWith(" ")) {
			answer2.append(" ");
		}
		Scanner sc = new Scanner(s);
		sc.useDelimiter(" ");
		while(sc.hasNext()) {
			char[] word = sc.next().toCharArray();
			for(int i = 0; i < word.length; i++) {
				if(i%2==0) {
					answer2.append(String.valueOf(word[i]).toUpperCase());
				}else {
					answer2.append(String.valueOf(word[i]).toLowerCase());
				}
			}
			if(sc.hasNext()) {
				answer2.append(" ");
			}
		}
		sc.close();
        if(s.endsWith(" ")) {
			answer2.append(" ");
		}
        return answer2.toString();
    }
}