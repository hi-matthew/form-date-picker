import React, { useState } from "react";
import { ChevronLeft } from "@styled-icons/boxicons-solid/ChevronLeft";
import { ChevronRight } from "@styled-icons/boxicons-solid/ChevronRight";
import "./_DatePicker.css";

export function useSetCalendarMonthYear() {
  const currentYear = new Date().getFullYear();
  const currentMonthIndex = new Date().getMonth();
  const [monthIndex, setMonthIndex] = useState(currentMonthIndex);
  const [year, setYear] = useState(currentYear);

  const handleClick = ({ target }) => {
    const userClickedNextMonth =
      target.id === "next" || target.parentNode.id === "next";
    const userClickedPrevMonth =
      target.id === "prev" || target.parentNode.id === "prev";
    const paginatedToNextYear = monthIndex + 1 === 12;
    const paginatedToPrevYear = monthIndex - 1 < 0;

    if (userClickedNextMonth && paginatedToNextYear) {
      setMonthIndex(0);
      setYear(year + 1);
      return;
    }
    if (userClickedNextMonth) {
      setMonthIndex(monthIndex + 1);
      return;
    }
    if (userClickedPrevMonth && paginatedToPrevYear) {
      setMonthIndex(11);
      setYear(year - 1);
      return;
    }
    if (userClickedPrevMonth) setMonthIndex(monthIndex - 1);
  };

  const getMonth = (index) => {
    const date = new Date();
    const newDate = new Date(
      `${index + 1} ${date.getDate()} ${date.getFullYear()}`
    );
    return newDate.toLocaleString("default", { month: "long" });
  };

  const monthYear = `${getMonth(monthIndex)} ${year}`;

  return { monthIndex, year, monthYear, handleChevronOnClick: handleClick };
}

// Heading component
function Heading({ render }) {
  const {
    monthIndex,
    year,
    monthYear,
    handleChevronOnClick,
  } = useSetCalendarMonthYear();
  return (
    <>
      <div className="date-picker-heading">
        <ChevronLeft id="prev" size={20} onClick={handleChevronOnClick} />
        <span>{monthYear}</span>
        <ChevronRight id="next" size={20} onClick={handleChevronOnClick} />
      </div>
      {render({ monthIndex, year })}
    </>
  );
}

export default Heading;
