function solution(box, n) {
  const [width, height, depth] = box;
  const maxCubes = Math.floor(width / n) * Math.floor(height / n) * Math.floor(depth / n);
  return maxCubes;
}