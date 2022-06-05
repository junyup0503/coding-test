package programmers.lv01;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

public class ReportResultQuiz {
//	class Solution {
//	    public int[] solution(String[] id_list, String[] report, int k) {
	public static void main(String[] args) {
			String[] id_list;
			String[] report;
	    	id_list = new String[6];
	    	id_list[0] = "a";
	    	id_list[1] = "c";
	    	id_list[2] = "d";
	    	id_list[3] = "bz";
	    	id_list[4] = "dbz";
	    	id_list[5] = "ffbz";
	    	
	    	report = new String[8];
	    	report[0] = "a bz";
	    	report[1] = "a bz";
	    	report[2] = "a c";
	    	report[3] = "bz c";
	    	report[4] = "bz d";
	    	report[5] = "c d";
	    	report[6] = "a d";
	    	report[7] = "a c";
	    	
//	    	Set<String> report2 = new HashSet<>(Arrays.asList(report));
//	    	int[] answer = new int[id_list.length];
//
//	    	for(int i = 0; i < id_list.length; i++) {
//	    		int count = 0;
//	    		for(String reportP : report2) {
//	    			if(!reportP.contains(id_list[i])) continue;
//	    			int index = reportP.indexOf(" ");
//	    			String tmp = reportP.substring(index+1);
//	    			if(id_list[i].equals(tmp)) {
//	    				count++;
//	    				if(count == 2) break;
//	    			}
//	    		}
//	    		if(count == 2) {
//	    			for(String reportP : report2) {
//	    				if(!reportP.contains(id_list[i])) continue;
//	    				int index = reportP.indexOf(" ");
//	    				String tmp1 = reportP.substring(0, index);
//		    			String tmp2 = reportP.substring(index+1);
//		    			if(tmp2.equals(id_list[i])) {
//		    				answer[Arrays.asList(id_list).indexOf(tmp1)] += 1;
//		    			}
//	    			}
//	    		}
//	    	}
//	    	
//	    	for(int aa : answer) {
//	    		System.out.println(aa);
//	    	}
	    	
	    	
	    	
	    	
	    	
	    	
	    	
	    	
	    	
	    	
	    	
	    	
	    	
	    	
	    	
	    	
	    	
	    	
	    	
	    	
	    	
	    	
	    	
	    	
	    	
	    	
	    	
	    	
	    	
	    	
	    	
	    	
	    	
	    	
	    	Set<String> report2 = new HashSet<>();
	    	for(int i = 0; i < report.length; i++) {
	    		report2.add(report[i]);
	    	}
	    	
	    	List<String> p = new ArrayList<>();
	    	List<String> o = new ArrayList<>();
	    	for(String t : report2) {
	    		int count = t.indexOf(" ");
	    		String pp = t.substring(0, count);
	    		String oo = t.substring(count+1, t.length());
	    		p.add(pp);
	    		o.add(oo);
	    		System.out.println("t = " + t);
	    		
	    	}
	    	
	    	Map<String, Integer> last = new LinkedHashMap<>();
	    	for(String id : id_list) {
	    		System.out.println("id = " + id);
	    		last.put(id, 0);
	    	}
	    	System.out.println("last = " + last);
	    	Map<String, Integer> list = new HashMap<String, Integer>();
	    	for(String key : o) {
	    		list.put(key, list.getOrDefault(key, 0)+1);
	    		System.out.println(key);
	    	}
	    	
	    	System.out.println(list);
	    	
	    	for(String key : list.keySet()) {
	    		System.out.println("key = " + key);
	    		if(list.get(key)>=2) {
	    			System.out.println("신고 두번 = " + key);
	    			for(String t : report2) {
	    	    		int count = t.indexOf(" ");
	    	    		String pp = t.substring(0, count);
	    	    		String oo = t.substring(count+1, t.length());
	    	    		if(oo.equals(key)) {
	    	    			last.put(pp, last.get(pp)+1);
	    	    		}
	    	    		
	    	    	}
	    		}
	    	}
	    	System.out.println(last);
	    	int[] end2 = new int[id_list.length];
	    	int i = 0;
	    	for(int num : last.values()) {
	    		end2[i] = num;
	    		i++;
	    	}
	    	
	    	for(int u = 0; u < end2.length; u++) {
	    		System.out.println(end2[u]);
	    	}
	    	
	    }
			
			
   	}
	    	
	        
	    
