function solution(n) {
  n.sort((a, b) => a[0] - b[0]);
  function getOver(n1, n2) {
    const maxN = Math.max(n1[0], n2[0]);
    const minN = Math.min(n1[1], n2[1]);
    return minN > maxN ? minN - maxN : 0;
  }

  const maxT = Math.max(n[0][0], n[1][0], n[2][0]);
  const minT = Math.min(n[0][1], n[1][1], n[2][1]);
  const tripple = minT > maxT ? minT - maxT : 0;

  return (
    getOver(n[0], n[1]) + getOver(n[1], n[2]) + getOver(n[0], n[2]) - (tripple*2)
  );
}