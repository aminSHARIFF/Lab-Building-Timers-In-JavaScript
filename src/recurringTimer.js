/**
 * Function: recurringTimer
 * Description: Starts a recurring timer that logs a message at fixed intervals.
 */
function recurringTimer(message, interval, logFn = console.log) {
  const timerId = setInterval(() => {
    logFn(message);
  }, interval);

  return timerId;
}

function stopRecurringTimer(timerId) {
  clearInterval(timerId);
}

module.exports = { recurringTimer, stopRecurringTimer };

