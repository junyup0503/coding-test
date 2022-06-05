package Test0318;

import java.text.Format;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.Period;
import java.time.temporal.ChronoUnit;
import java.util.Calendar;
import java.util.Random;
import java.util.Scanner;

public class Practice01 {
	public static void main(String[] args) {
		//.nextLine() 대신 사용할 수 있는 .findInLine() 에 대한 설명
		
				StringBuffer buffer = new StringBuffer();
				buffer.append("<메소드 오버로딩>과 <메소드 오버라이드>의 차이는 무엇인가요?");
				buffer.append("\n");
				buffer.append("<StringBuffer>와 <StringBuilder>의 차이는 무엇인가요?");
				buffer.append("\n");
				buffer.append("최근에 가장 흥미있게 본 IT 관련 뉴스가 뭔가요?");
				buffer.append("\n");
				
				String text = buffer.toString();
				
				Scanner sc = new Scanner(text);
				while(sc.hasNextLine()) {
					String line = sc.findInLine("<.*?>"); 
					if(line != null) {//찾았다면
//						text = text.replace(line, "***");
						System.out.println("line = " + line);
					}
					else {//못찾았다면
						sc.nextLine();//pass!
					}
				}
				sc.close();
				
//				System.out.println(text);
	}
}
