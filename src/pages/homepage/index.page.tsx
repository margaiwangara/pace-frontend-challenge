import {
  Main,
  SectionCalendarWrapper,
  SectionCurrentDayYearDisplay,
  DivDayWrapper,
  DivDaysWrapper,
} from './Homepage.styles';
import { format } from 'date-fns';
import {
  formatToTime,
  addMinutesToMidnight,
  format24To12HourSystem,
} from '@utils/formats';
import { HOURS_IN_DAY, MINUTES_IN_DAY } from '@utils/constants';
import useSWR from 'swr';
import React from 'react';

const fetcher = (query: string) =>
  fetch('/api/graphql', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ query }),
  })
    .then((res) => res.json())
    .then((json) => json.data);

function HomePage() {
  const formattedDate = format(new Date(), 'ccc dd MMM yyyy').split(' ');

  const { data, error } = useSWR(
    '{ events { id, title, start, end } }',
    fetcher,
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const { events } = data;

  let objectOfExistingEvents = events.reduce((acc, curr) => {
    acc[curr.start] = 0;
    return acc;
  }, {});

  return (
    <Main>
      <SectionCalendarWrapper>
        <SectionCurrentDayYearDisplay>
          <div className="day-display">
            <span className="text">{formattedDate?.[0]}</span>
            <span className="numerical">{formattedDate?.[1]}</span>
          </div>
          <div className="year-display">
            <span className="text">{formattedDate?.[2]}</span>
            <span className="numerical">{formattedDate?.[3]}</span>
          </div>
        </SectionCurrentDayYearDisplay>
        <DivDaysWrapper>
          {events.map((ev) => {
            const eventStart = addMinutesToMidnight(ev.start);
            const eventEnd = addMinutesToMidnight(ev.end);

            const eventStartHourFormat = parseInt(eventStart.hour) - 1;
            const eventStartMinuteFormat = parseInt(eventStart.minutes);
            const eventEndHourFormat = parseInt(eventEnd.hour) - 1;
            const eventEndMinuteFormat = parseInt(eventEnd.minutes);

            const topPercentage =
              ((eventStartHourFormat * 60 + eventStartMinuteFormat) /
                MINUTES_IN_DAY) *
              100;
            const bottomPercentage =
              ((eventEndHourFormat * 60 + eventEndMinuteFormat) /
                MINUTES_IN_DAY) *
              100;

            const eventHeight = bottomPercentage - topPercentage;

            objectOfExistingEvents[ev.start] += 1;

            return (
              <div
                key={ev.id}
                className="event-box"
                style={{
                  top: `${topPercentage}%`,
                  height: `${eventHeight}%`,
                  left:
                    objectOfExistingEvents[ev.start] === 1
                      ? 0
                      : (objectOfExistingEvents[ev.start] - 1) * 101,
                }}
              >
                <span>{ev.title}</span>
                <span>
                  {format24To12HourSystem(eventStart.hour, eventStart.minutes)}-
                  {format24To12HourSystem(eventEnd.hour, eventEnd.minutes)}
                </span>
              </div>
            );
          })}
          {HOURS_IN_DAY.map((hid) => (
            <DivDayWrapper key={hid}>
              <span className="time-frame top">{formatToTime(hid)}</span>
              <span className="time-frame bottom">{formatToTime(hid + 1)}</span>
            </DivDayWrapper>
          ))}
        </DivDaysWrapper>
      </SectionCalendarWrapper>
    </Main>
  );
}

export default HomePage;
