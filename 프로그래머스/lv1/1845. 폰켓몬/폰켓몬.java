import java.util.HashSet;
import java.util.Set;

class Solution {
    public int solution(int[] nums) {
        int answer = 0;
        int selectNum = nums.length/2;
		
		Set<Integer> numsRemove = new HashSet<Integer>();
		for(int i = 0; i < nums.length; i++) {
			numsRemove.add(nums[i]);
		}
		
		int size = numsRemove.size();
		
		if(size>=selectNum) {
			answer = selectNum;
		}else if(size<selectNum) {
			answer = size;
		}
        return answer;
    }
}