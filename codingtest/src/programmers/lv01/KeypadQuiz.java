package programmers.lv01;

public class KeypadQuiz {
	
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
	
	public static void main(String[] args) {
		
		int[] numbers = {7,0,8,2,8,3};
		
		for(int i = 0; i < numbers.length; i++) {
			if(numbers[i] == 0) {
				numbers[i] = 11;
			}
			System.out.println(numbers[i]);
		}
		
		String hand = "left";
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
			int[] rowcol = {rownum(row),colnum(row)};
			int[] right = {rownum(rightP), colnum(rightP)};
			int[] left = {rownum(leftP), colnum(leftP)};
			
			int[] rightD = {Math.abs(right[0] - rowcol[0]), Math.abs(right[1] - rowcol[1])};
			int RD = rightD[0] + rightD[1];
			int[] leftD =  {Math.abs(left[0] - rowcol[0]), Math.abs(left[1] - rowcol[1])};
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
					if(hand.equals("right")) {
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
		
		System.out.println(answer);
		
		
		
		
		
		
	}

}
