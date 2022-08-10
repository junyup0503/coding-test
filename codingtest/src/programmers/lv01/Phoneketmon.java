package programmers.lv01;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

public class Phoneketmon {
	public static void main(String[] args) {
		int[] nums = {3,1,2,3};
		
		
		System.out.println(nums.length);
		int selectNum = nums.length/2;
		
		Set<Integer> numsRemove = new HashSet<Integer>();
		for(int i = 0; i < nums.length; i++) {
			numsRemove.add(nums[i]);
		}
		
		
		System.out.println(numsRemove);
	}
}
