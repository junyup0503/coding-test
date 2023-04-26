function solution(players, callings) {
    const pMap = players.reduce((acc, cur, i) => {
    return acc.set(cur, i);
  }, new Map());
  const pMap2 = players.reduce((acc, cur, i) => {
    return acc.set(i, cur);
  }, new Map());

  for (let i of callings) {
    const up = i;
    const upIndex = pMap.get(i);
    const down = pMap2.get(pMap.get(i) - 1);
    const downIndex = pMap.get(down);

    pMap.set(up, pMap.get(up) - 1);
    pMap.set(down, pMap.get(down) + 1);
    pMap2.set(upIndex, down);
    pMap2.set(downIndex, up);
  }

  return Array.from(pMap2.values());
}