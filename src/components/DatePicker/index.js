import React from "react";
import Heading from "./Heading";
import CalendarDays from "./CalendarDays";

function DatePicker() {
  return (
    <div className="date-picker">
      <Heading
        render={({ monthIndex, year }) => (
          <CalendarDays monthIndex={monthIndex} year={year} />
        )}
      />
    </div>
  );
}

export default DatePicker;
