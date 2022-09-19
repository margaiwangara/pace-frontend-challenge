import { setHours, format, addMinutes, addHours } from 'date-fns';

export function formatToTime(hours: number) {
  return format(setHours(new Date(), hours), 'h aaa');
}

export function addMinutesToMidnight(minutes: number) {
  const d = new Date();
  d.setHours(0, 0, 0, 0); // midnight

  const df = format(addMinutes(d, minutes), 'k:mm');

  return {
    hour: df.split(':')?.[0],
    minutes: df.split(':')?.[1],
  };
}

export function format24To12HourSystem(hours: string, minutes: string) {
  const d = new Date();
  const parsedHours = parseInt(hours);
  const parsedMinutes = parseInt(minutes);
  d.setHours(parsedHours, parsedMinutes);

  return format(d, 'h:mm aaa');
}
