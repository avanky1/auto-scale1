function isPrimeBig(n) {
  if (n < 2n) return false;
  for (let i = 2n; i * i <= n; i++) {
    if (n % i === 0n) return false;
  }
  return true;
}

module.exports = function runPrimeStress() {
  const start = 10n ** 12n;

  for (let i = start; i < start + 500n; i++) {
    isPrimeBig(i);
  }
};
