function solution(emer) {
  let temp = [...emer];
  const tempS = Array.from(new Set(emer.sort((a,b)=>b-a)));
  console.log(tempS);
  let answer = [];

  temp.reduce((acc,cur)=>{
    answer.push(tempS.indexOf(cur)+1);
  },0);
  return answer;
}