function solution(dots) {
  function getSlope(a, b) {
    return (b[1] - a[1]) / (b[0] - a[0]);
  }

  
  const slopes = [
    [getSlope(dots[0], dots[1]), getSlope(dots[2], dots[3])],
    [getSlope(dots[0], dots[2]), getSlope(dots[1], dots[3])],
    [getSlope(dots[0], dots[3]), getSlope(dots[1], dots[2])]
  ];

  for (const [slope1, slope2] of slopes) {
    if (slope1 === slope2) {
      return 1;
    }
  }

  return 0;
}