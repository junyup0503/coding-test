package programmers.lv01;

import java.util.Scanner;

public class AlphabetChange {
	public static void main(String[] args) {
		String answer = "   try hFDlo   world   ";
		StringBuilder answer2 = new StringBuilder();
		if(answer.startsWith(" ")) {
			answer2.append(" ");
		}
		Scanner sc = new Scanner(answer);
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
		if(answer.endsWith(" ")) {
			answer2.append(" ");
		}
        System.out.println(answer2.toString());
	}
}
