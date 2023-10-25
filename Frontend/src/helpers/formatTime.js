/**
 * Convert a Time in the format "HH:MM:SS" (10:50:00) to "HH:MM" (10:50)
 * @param {Time} time Time to format 
 * @returns {String} Time in the new format
 * 
 * @example
 * formatTime("10:50:00");
 */
const formatTime = (time) => {
  const timeSplit = time.split(":");

  return `${timeSplit[0]}:${timeSplit[1]}`;
};

export default formatTime;
