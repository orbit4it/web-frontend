'use client';
import { today } from '@/helper/date';
import { CalendarProps, ScheduleProps } from '@/helper/interfaces';
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  getDay,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfWeek,
} from 'date-fns';
import id from 'date-fns/locale/id';
import React, { useEffect, useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { twMerge } from 'tailwind-merge';

const Calendar: React.FC<CalendarProps> = ({ filterBy, schedules }) => {
  console.log(filterBy);
  const [hoveredScheduleId, setHoveredScheduleId] = useState<number | null>(
    null
  );
  const [selectedDay, setSelectedDay] = useState<Date>(today);
  const [currentMonth, setCurrentMonth] = useState<string>(
    format(today, 'MMM-yyyy')
  );

  const [filteredSchedules, setFilteredSchedules] = useState<
    ScheduleProps[] | undefined
  >(schedules);

  useEffect(() => {
    if (schedules) {
      if (filterBy == 'All') {
        setFilteredSchedules(schedules);
      } else {
        const filtered = schedules.filter(
          (schedule) => schedule.type == filterBy
        );
        setFilteredSchedules(filtered);
      }
    }
  }, [filterBy, schedules]);

  console.log(filteredSchedules);

  const firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());
  const colStartClasses = [
    '',
    'col-start-2',
    'col-start-3',
    'col-start-4',
    'col-start-5',
    'col-start-6',
    'col-start-7',
  ];

  const nextMonth = () => {
    const firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  };

  const prevMonth = () => {
    const firstDayPrevMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayPrevMonth, 'MMM-yyyy'));
  };
  const days = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  });
  return (
    <>
      <section className="w-full my-2">
        <div className="grid grid-cols-7 text-xs leading-6 text-center text-gray-500">
          <div className="text-red-600">Ming</div>
          <div>Sen</div>
          <div>Sel</div>
          <div>Rab</div>
          <div>Kam</div>
          <div>Jum</div>
          <div className="text-red-600">Sab</div>
        </div>
        <div className="grid grid-cols-7 mt-2 text-xs z-0">
          {days.map((day, index) => (
            <div
              key={index}
              className={twMerge(
                index == 0 && colStartClasses[getDay(day)],
                'py-2'
              )}
            >
              <button
                onClick={() => setSelectedDay(day)}
                className={twMerge(
                  isEqual(day, selectedDay) && 'text-white',
                  !isEqual(day, selectedDay) &&
                    isToday(day) &&
                    (filterBy == 'Global'
                      ? 'text-primary'
                      : filterBy == 'Cinematography'
                      ? 'text-cinematography'
                      : filterBy == 'Design Graphic'
                      ? 'text-design-graphic'
                      : filterBy == 'IT Support'
                      ? 'text-it-support'
                      : filterBy == 'Web Development'
                      ? 'text-web-dev'
                      : filterBy == 'Game Development'
                      ? 'text-game-dev'
                      : 'text-primary'),
                  !isEqual(day, selectedDay) &&
                    !isToday(day) &&
                    isSameMonth(day, firstDayCurrentMonth) &&
                    'text-white',
                  !isEqual(day, selectedDay) &&
                    !isToday(day) &&
                    !isSameMonth(day, firstDayCurrentMonth) &&
                    'text-gray-400',
                  isEqual(day, selectedDay) &&
                    isToday(day) &&
                    (filterBy == 'Global'
                      ? 'bg-primary'
                      : filterBy == 'Cinematography'
                      ? 'bg-cinematography'
                      : filterBy == 'Design Graphic'
                      ? 'bg-design-graphic'
                      : filterBy == 'IT Support'
                      ? 'bg-it-support'
                      : filterBy == 'Web Development'
                      ? 'bg-web-dev'
                      : filterBy == 'Game Development'
                      ? 'bg-game-dev'
                      : 'bg-primary'),
                  isEqual(day, selectedDay) && !isToday(day) && 'bg-d-primary',
                  !isEqual(day, selectedDay) && 'hover:bg-d-primary',
                  (isEqual(day, selectedDay) || isToday(day)) && 'font-bold',
                  'relative w-8 h-8 mx-auto flex items-center justify-center rounded-lg'
                )}
              >
                <time dateTime={format(day, 'yyyy-MM-dd')} className="w-1 h-1">
                  <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-xs text-center ">
                    <p className="z-0">{format(day, 'd')}</p>
                    <div className="flex gap-1 z-50">
                      {filteredSchedules &&
                        filteredSchedules.map((schedule) => {
                          if (
                            isEqual(
                              parseISO(format(day, 'yyyy-MM-dd')),
                              parseISO(
                                format(parseISO(schedule.start), 'yyyy-MM-dd')
                              )
                            )
                          ) {
                            return (
                              <>
                                <div
                                  key={schedule.id}
                                  onMouseEnter={() =>
                                    setHoveredScheduleId(schedule.id)
                                  }
                                  onMouseLeave={() =>
                                    setHoveredScheduleId(null)
                                  }
                                  className={twMerge(
                                    'mx-auto w-2 h-2 rounded-full',
                                    schedule.type == 'Global'
                                      ? 'bg-[#6E64DD]'
                                      : schedule.type == 'Cinematography'
                                      ? 'bg-cinematography'
                                      : schedule.type == 'Design Graphic'
                                      ? 'bg-design-graphic'
                                      : schedule.type == 'IT Support'
                                      ? 'bg-it-support'
                                      : schedule.type == 'Web Development'
                                      ? 'bg-web-dev'
                                      : schedule.type == 'Game Development'
                                      ? 'bg-game-dev'
                                      : 'bg-[#6E64DD]'
                                  )}
                                />
                                <div
                                  key={schedule.id}
                                  className={twMerge(
                                    schedule.id == hoveredScheduleId
                                      ? 'flex'
                                      : 'hidden',
                                    'w-max absolute -bottom-16 left-1/2 -translate-x-1/2 px-2 py-1 rounded-lg justify-between items-center gap-2 bg-d-primary border-[1px] border-[##ECECEC] before:content-[""] before:w-0 before:h-0 before:border-r-[5px] before:border-r-transparent before:border-l-[5px] before:border-l-transparent before:border-b-[10px] before:border-b-d-primary before:absolute before:before-border before:-top-2 before:left-1/2 before:-translate-x-1/2 z-50'
                                  )}
                                >
                                  <div
                                    className={twMerge(
                                      'w-5 h-5 rounded-full',
                                      schedule.type == 'Global'
                                        ? 'bg-[#6E64DD]'
                                        : schedule.type == 'Cinematography'
                                        ? 'bg-cinematography'
                                        : schedule.type == 'Design Graphic'
                                        ? 'bg-design-graphic'
                                        : schedule.type == 'IT Support'
                                        ? 'bg-it-support'
                                        : schedule.type == 'Web Development'
                                        ? 'bg-web-dev'
                                        : schedule.type == 'Game Development'
                                        ? 'bg-game-dev'
                                        : 'bg-[#6E64DD]'
                                    )}
                                  />
                                  <div className="flex flex-col items-start text-gray-300 font-medium bg-d-primary">
                                    <h1 className="text-[0.5rem]">
                                      {schedule.title} - {schedule.type}
                                    </h1>
                                    <div className="w-full flex justify-start gap-1 text-[0.4rem] text-end italic z-50  ">
                                      <span>Di {schedule.location}</span>
                                      <time dateTime={schedule.start}>
                                        {format(
                                          parseISO(schedule.start),
                                          'h:mm a'
                                        )}
                                      </time>
                                      <span>-</span>
                                      <time dateTime={schedule.end}>
                                        {format(
                                          parseISO(schedule.end),
                                          'h:mm a'
                                        )}
                                      </time>
                                    </div>
                                    {schedule.subject && (
                                      <p className="text-[0.4rem]">
                                        Materi: <b>{schedule.subject}</b>
                                      </p>
                                    )}
                                  </div>
                                </div>
                              </>
                            );
                          }
                        })}
                    </div>
                  </div>
                </time>
              </button>
            </div>
          ))}
        </div>
      </section>
      <section className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/5 mx-auto mt-2 flex justify-between items-center">
        <FaAngleLeft
          size={20}
          color="white"
          cursor={'pointer'}
          onClick={prevMonth}
        />
        <h2 className="text-sm text-white font-medium">
          {format(firstDayCurrentMonth, 'MMMM yyyy', { locale: id })}
        </h2>
        <FaAngleRight
          size={20}
          color="white"
          cursor={'pointer'}
          onClick={nextMonth}
        />
      </section>
    </>
  );
};

export default Calendar;
