import { useEffect, useState } from "react";
import { getWeekFilter } from "../helpers";

const FilterCalendar = () => {
  const todayDate = new Date();
  let actualWeek = getWeekFilter(todayDate);
  
  const [actualDate, setActualDate] = useState(todayDate);
  const [active, setActive] = useState(actualWeek[0]);

  console.log(actualDate);
  
  useEffect(() => {
    actualWeek = getWeekFilter(new Date(actualDate));
  }, [actualDate]);
  
  return (
    <div className="flex">
      {actualWeek.map((day) => (
        <button
          key={day}
          onClick={() => setActive(day)}
          className={`p-2 border-2 font-bold text-lg border-black hover:bg-[#F9595F] hover:text-white ${
            active === day ? "bg-[#F9595F] text-white" : ""
          }`}
        >
          {day}
        </button>
      ))}
      <input
        type="date"
        onChange={(e) => setActualDate(e.target.value)}
        value={actualDate}
      />
    </div>
  );
};

export default FilterCalendar;
