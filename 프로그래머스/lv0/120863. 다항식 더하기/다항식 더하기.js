function solution(polynomial) {
    const poly = polynomial.split(" ");
  let x = 0;
  let num = 0;
  for (let i of poly) {
    if (i.includes("x")) {
      x = Number.isNaN(parseInt(i)) ? x + 1 : x + parseInt(i);
    } else if (i === "+") {
      continue;
    } else {
      num += parseInt(i);
    }
  }

  x = x > 1 ? `${x}x` : x === 0 ? 0 : "x";

  return x !== 0 && num !== 0
    ? `${x} + ${num}`
    : x !== 0 && num === 0
    ? `${x}`
    : x === 0 && num === 0
    ? ""
    : `${num}`;
}