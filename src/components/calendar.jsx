import { useState } from "react";
import {
  addMonths,
  subMonths,
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  isSameMonth,
  isSameDay,
} from "date-fns";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

  const renderHeader = () => (
    <div
      id="Calendar-Month-Buttons"
      className="flex items-center justify-between mb-5"
    >
      <button className="p-1 text-gray-600 hover:bg-cream rounded cursor-pointer">
        {"<"}
      </button>
      <span className="font-medium text-gray-800">
        {format(currentMonth, "MMMM yyyy")}
      </span>
      <button className="p-1 text-gray-600 hover:bg-cream rounded cursor-pointer">
        {">"}
      </button>
    </div>
  );

  const renderDays = () => {
    const days = [];
    const date = startOfWeek(new Date());
    for (let i = 0; i < 7; i++) {
      days.push(
        <div
          key={i}
          className="text-center font-medium text-sm text-gray-600 mb-5"
        >
          {format(addDays(date, i), "EEE")}
        </div>
      );
    }
    return <div className="grid grid-cols-7">{days}</div>;
  };

  const renderDates = () => {
    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        days.push(
          <div
            key={day}
            className={`p-2 text-center cursor-pointer rounded
              ${!isSameMonth(day, monthStart) ? "text-gray-500" : ""}
              ${
                isSameDay(day, selectedDate)
                  ? "bg-sage text-white"
                  : "hover:bg-sage/50"
              }
            `}
            onClick={() => setSelectedDate(cloneDay)}
          >
            {format(day, "d")}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="grid grid-cols-7" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div>{rows}</div>;
  };

  return (
    <div
      id="Calendar"
      className="bg-white rounded-2xl p-6 shadow-sm border border-warm"
    >
      <h3 className="text-lg font-medium text-gray-800 mb-4">Calendar</h3>
      {renderHeader()}
      {renderDays()}
      {renderDates()}
    </div>
  );
};

export default Calendar;
