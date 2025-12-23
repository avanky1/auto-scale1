module.exports = function runMatrixStress() {
  const SIZE = 250; // increase to 300+ for more pain

  const A = Array.from({ length: SIZE }, () =>
    Array.from({ length: SIZE }, () => Math.random())
  );

  const B = Array.from({ length: SIZE }, () =>
    Array.from({ length: SIZE }, () => Math.random())
  );

  const C = Array.from({ length: SIZE }, () =>
    Array.from({ length: SIZE }, () => 0)
  );

  for (let i = 0; i < SIZE; i++) {
    for (let j = 0; j < SIZE; j++) {
      let sum = 0;
      for (let k = 0; k < SIZE; k++) {
        sum += A[i][k] * B[k][j];
      }
      C[i][j] = sum;
    }
  }
};
