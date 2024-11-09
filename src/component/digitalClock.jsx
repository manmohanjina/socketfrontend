import { useState, useEffect } from "react";

const TimeUnit = ({ value, bgColor }) => (
  <div className={`time-unit ${bgColor} text-white p-3 rounded-md shadow`}>{value}</div>
);

function TimeDisplay() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [ampm, setAmpm] = useState("AM");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setHours(now.getHours() % 12 || 12);
      setMinutes(now.getMinutes());
      setSeconds(now.getSeconds());
      setAmpm(now.getHours() >= 12 ? "PM" : "AM");
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  console.log('helel');
  

  return (
    <span className="flex justify-center gap-4 bg-gray-800 p-4 rounded-lg shadow-lg">
      <TimeUnit value={hours} bgColor="bg-indigo-500" />
      <TimeUnit value={minutes} bgColor="bg-blue-500" />
      <TimeUnit value={seconds} bgColor="bg-teal-500" />
      <TimeUnit value={ampm} bgColor="bg-orange-500" />
    </span>
  );
}

export default TimeDisplay;
