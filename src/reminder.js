/**
 * Function: delayedReminder
 * Description: Logs a reminder message after a specified delay.
 */
/**
 * Function: delayedReminder
 * Description: Logs a reminder message after a specified delay.
 */
function delayedReminder(message, delay, logFn = console.log) {
  return new Promise((resolve) => {
    setTimeout(() => {
      logFn(message);
      resolve(message);
    }, delay);
  });
}

module.exports = { delayedReminder };
