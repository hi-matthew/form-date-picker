import React from "react";
import "./_DatePicker.css";

// Helper functions
const renderDaysOfWeek = () => {
  const weekdayAbbreviations = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  return weekdayAbbreviations.map((day) => <p key={day}>{day}</p>);
};

const getNumberOfDaysInTheMonth = (monthIndex) => {
  return new Date(1, monthIndex + 1, 0).getDate();
};

const printDayOfWeek = (monthIndex, dayIndex) => {
  return new Date(
    `${monthIndex + 1}/${dayIndex + 1}/${new Date().getFullYear()}`
  ).toLocaleDateString("en-US", { weekday: "long" });
};

const getDatesForTheMonth = (numberOfDaysInTheMonth, monthIndex) => {
  return Array(numberOfDaysInTheMonth)
    .fill(null)
    .map((_, dayIndex) => {
      return { [dayIndex + 1]: printDayOfWeek(monthIndex, dayIndex) };
    });
};

const populateCalendarMatrix = (datesOfTheMonth, monthIndex, year) => {
  const calendar = {
    row1: Array(new Date(`${monthIndex + 1}/01/${year}`).getDay()).fill(null),
    row2: [],
    row3: [],
    row4: [],
    row5: [],
    row6: [],
  };

  datesOfTheMonth.forEach((day) => {
    let rowIndex = 1;

    Object.values(calendar).forEach((item) => {
      if (item.length === 7) rowIndex++;
    });
    const rowIndexKey = `row${rowIndex}`;
    const weekday = Object.entries(day)[0][0];
    calendar[rowIndexKey].push(weekday);
  });

  if (calendar.row5.length !== 7) {
    Array(7 - calendar.row5.length)
      .fill(null)
      .forEach(() => calendar.row5.push(null));
  }

  if (calendar.row6.length) {
    Array(7 - calendar.row6.length)
      .fill(null)
      .forEach(() => calendar.row6.push(null));
  }

  return calendar;
};

const renderCalendarRowElements = (calendarMatrix) => {
  return Object.values(calendarMatrix).map((row) =>
    row.map((day, index) => (
      <p
        key={`${index + 1}-${day || Math.random()}`}
        className={`${day ? "date" : ""}`}
      >
        <span>{day}</span>
      </p>
    ))
  );
};

export function generateCalendar(monthIndex, year) {
  const numberOfDaysInTheMonth = getNumberOfDaysInTheMonth(monthIndex);
  const datesOfTheMonth = getDatesForTheMonth(
    numberOfDaysInTheMonth,
    monthIndex
  );
  const calendarMatrix = populateCalendarMatrix(
    datesOfTheMonth,
    monthIndex,
    year
  );
  const calendarRowElements = renderCalendarRowElements(calendarMatrix);
  return calendarRowElements;
}

// Exported Component
function CalendarDays({ monthIndex, year }) {
  const daysOfTheWeek = renderDaysOfWeek();
  const [row1, row2, row3, row4, row5, row6] = generateCalendar(
    monthIndex,
    year
  );

  return (
    <>
      <div className="date-picker-date-container">
        <div className="date-picker-day-of-week">{daysOfTheWeek}</div>
        <div className="date-picker-calendar-days">
          <div>{row1}</div>
          <div>{row2}</div>
          <div>{row3}</div>
          <div>{row4}</div>
          <div>{row5}</div>
          <div>{row6}</div>
        </div>
      </div>
    </>
  );
}

export default CalendarDays;
