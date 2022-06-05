package programmers.lv01;

import java.util.HashSet;
import java.util.Set;

public class LottoRankQuiz {
	public static void main(String[] args) {
		int[] lottos =  {0,0,0,0,0,0};
		int[] win_nums = {1, 2, 3, 4, 5, 6};
		
		int zeroCount = 0;
		int rank;
		int[] answer = new int[2];
		
		Set<Integer> list = new HashSet<Integer>();
		for(int i = 0; i < 6; i++) {
			if(lottos[i] == 0) {
				zeroCount++;
			}else{
				list.add(lottos[i]);
			}
			list.add(win_nums[i]);
		}
		
		rank = 12 - list.size() - zeroCount;
		
		if (rank == 0) {
			answer[1] = 6;
			answer[0] = 7 - zeroCount;
			if (answer[0] > 6) answer[0] = 6;
		} else if (rank == 1) {
			answer[1] = 6;
			answer[0] = answer[1] - zeroCount;
		} else {
			answer[1] = 7 - rank;
			answer[0] = answer[1] - zeroCount;
		}
		
		System.out.println(answer[0] +","+answer[1]);

	}

}
