class Solution {
    private static int rownum(int row) {
		if(row <= 3) {
			return 1;
		}else if(row <= 6) {
			return 2;
		}else if(row <= 9) {
			return 3;
		}else {
			return 4;
		}
	}
	
	private static int colnum(int col) {
		if(col % 3 == 0) {
			return 3;
		}
		return col % 3;
	}
    
    public String solution(int[] numbers, String hand) {
        for(int i = 0; i < numbers.length; i++) {
			if(numbers[i] == 0) {
				numbers[i] = 11;
			}
		}
        String mainHand;
		if(hand.equals("right")) {
			mainHand = "R";
		}else {
			mainHand = "L";
		}
		
		StringBuffer answer = new StringBuffer();
		
		int rightP = 12;
		int leftP = 10;
		
		
		
		for(int i = 0; i < numbers.length; i++) {
			int row = numbers[i];
			int[] rawcol = {Solution.rownum(row),Solution.colnum(row)};
			int[] right = {Solution.rownum(rightP), Solution.colnum(rightP)};
			int[] left = {Solution.rownum(leftP), Solution.colnum(leftP)};
			
			int[] rightD = {Math.abs(right[0] - rawcol[0]), Math.abs(right[1] - rawcol[1])};
			int RD = rightD[0] + rightD[1];
			int[] leftD =  {Math.abs(left[0] - rawcol[0]), Math.abs(left[1] - rawcol[1])};
			int LD = leftD[0] + leftD[1];
			
			if(numbers[i] == 3 || numbers[i] == 6 || numbers[i] == 9) {
				answer.append("R");
				rightP = numbers[i];
			}else if(numbers[i] == 1 || numbers[i] == 4 || numbers[i] == 7) {
				answer.append("L");
				leftP = numbers[i];
			}else {
				if(RD > LD) {
					answer.append("L");
					leftP = numbers[i];
				}else if(RD == LD) {
					answer.append(mainHand);
					if(mainHand.equals("R")) {
						rightP = numbers[i];
					}else {
						leftP = numbers[i];
					}
				}else {
					answer.append("R");
					rightP = numbers[i];
				}
			}
		}
        String answer2 = answer.toString();
        return answer2;
    }
}