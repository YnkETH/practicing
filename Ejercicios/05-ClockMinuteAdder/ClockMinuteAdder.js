function clockMinuteAdder(time, minutesToAdd) {
  // Your code here:
  const [hours, minutes] = time.split(":").map(Number);

  let totalMinutes = hours * 60 + minutes + minutesToAdd;
  const adjustedHours = Math.floor(totalMinutes / 60) % 12; // 9
  const adjustedMinutes = totalMinutes % 60; // 20

  const newHours = adjustedHours === 0 ? 12 : adjustedHours; // 9
  const newMinutes = adjustedMinutes.toString().padStart(2, "0"); // "20"

  return `${newHours}:${newMinutes}`;

  // Segunda Solucion
  /* let [hours, minutes] = time.split(":");
​
  minutes = Number(minutes) + minutesToAdd;
​
  hours = Number(hours) + Math.floor(minutes / 60);
​
  minutes = minutes % 60;
​
  hours = ((hours - 1) % 12) + 1;
​
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  return hours + ":" + minutes; */
}
console.log(clockMinuteAdder("09:00", 20)); // '09:20'
//console.log(clockMinuteAdder("01:30", 30)); // '02:00'
//console.log(clockMinuteAdder("12:05", 100)); // '01:45'

module.exports = clockMinuteAdder;