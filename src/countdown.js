/**
 * Function: countdownTimer
 * Description: Creates a countdown timer that logs the remaining time at regular intervals and stops at 0.
 */

function countdownTimer(startTime, interval, logFn = console.log) {
  let remaining = startTime;

  const timerId = setInterval(() => {
    logFn(remaining);
    remaining--;

    if (remaining < 0) {
      clearInterval(timerId);
    }
  }, interval);

  return timerId;
}

module.exports = { countdownTimer };
