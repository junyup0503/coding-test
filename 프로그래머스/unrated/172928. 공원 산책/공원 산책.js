function solution(park, routes) {
    let start = [0, 0];
    let count = 0;
    for (let i of park) {
    if (i.indexOf("S") > -1) {
      start = [count, i.indexOf("S")];
        park[count] = park[count].replace("S", "O");
      break;
    }
    count++;
  }

  function move(tempCur, way, count) {
    let cur = [...tempCur];
    if (count === 0) {
      return (start = cur);
    }
    if (
      way === "E" &&
      cur[1] !== park[cur[0]].length - 1 &&
      park[cur[0]][cur[1] + 1] === "O"
    ) {
      cur[1] = cur[1] + 1;
      move(cur, way, --count);
    } else if (
      way === "W" &&
      cur[1] !== 0 &&
      park[cur[0]][cur[1] - 1] === "O"
    ) {
      cur[1] = cur[1] - 1;
      move(cur, way, --count);
    } else if (
      way === "N" &&
      cur[0] !== 0 &&
      park[cur[0] - 1][cur[1]] === "O"
    ) {
      cur[0] = cur[0] - 1;
      move(cur, way, --count);
    } else if (
      way === "S" &&
      cur[0] !== park.length - 1 &&
      park[cur[0] + 1][cur[1]] === "O"
    ) {
      cur[0] = cur[0] + 1;
      move(cur, way, --count);
    } else {
      return count = -1;
    }
  }

  for (let i of routes) {
    move(start, i.split(" ")[0], i.split(" ")[1]);
  }

  return start;
}