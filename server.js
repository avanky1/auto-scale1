const express = require("express");
const runMatrixStress = require("./stress/matrix");
const runPrimeStress = require("./stress/primes");

const app = express();
const PORT = 80;

let stressInterval = null;

app.get("/", (req, res) => {
  res.send("✅ CPU Stress App is running");
});

/**
 * START CPU STRESS
 */
app.get("/cpuincrease", (req, res) => {
  if (stressInterval) {
    return res.send("⚠️ CPU stress already running");
  }

  stressInterval = setInterval(() => {
    runMatrixStress();
    runPrimeStress();
  }, 0);

  res.send("🔥 CPU stress started (heavy math)");
});

/**
 * STOP CPU STRESS
 */
app.get("/cpudown", (req, res) => {
  if (!stressInterval) {
    return res.send("ℹ️ CPU stress not running");
  }

  clearInterval(stressInterval);
  stressInterval = null;

  res.send("❄️ CPU stress stopped");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
