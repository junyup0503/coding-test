import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;

class Solution {
    public int[] solution(String[] id_list, String[] report, int k) {
            Set<String> report2 = new HashSet<>();
	    	for(int i = 0; i < report.length; i++) {
	    		report2.add(report[i]);
	    	}
	    	
	    	List<String> p = new ArrayList<>();
	    	List<String> o = new ArrayList<>();
	    	for(String t : report2) {
	    		int count = t.indexOf(" ");
	    		String pp = t.substring(0, count);
	    		String oo = t.substring(count+1);
	    		p.add(pp);
	    		o.add(oo);
	    		
	    	}
	    	
	    	Map<String, Integer> last = new LinkedHashMap<>();
	    	for(String id : id_list) {
	    		
	    		last.put(id, 0);
	    	}

	    	Map<String, Integer> list = new HashMap<String, Integer>();
	    	for(String key : o) {
	    		list.put(key, list.getOrDefault(key, 0)+1);

	    	}
	    	
	    	
	    	for(String key : list.keySet()) {
	    	
	    		if(list.get(key)>=k) {
	    			
	    			for(String t : report2) {
                        if(!t.contains(key)) continue;
	    	    		int count = t.indexOf(" ");
	    	    		String pp = t.substring(0, count);
	    	    		String oo = t.substring(count+1);
	    	    		if(oo.equals(key)) {
	    	    			last.put(pp, last.get(pp)+1);
	    	    		}
	    	    		
	    	    	}
	    		}
	    	}
	    
	    	int[] answer = new int[id_list.length];
	    	int i = 0;
	    	for(int num : last.values()) {
	    		answer[i] = num;
	    		i++;
	    	}
        return answer;
    }
}