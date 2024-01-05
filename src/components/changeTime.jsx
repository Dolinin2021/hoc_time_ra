import moment from 'moment';

export default function changeTime(str) {
  let diff = moment().diff(moment(str));
  if (diff < 0 || typeof diff !== 'number') return 'ошибка времени';
  return diff < 3.6e6
    ? Math.floor(diff / 1000 / 60) + ' минут назад'
    : diff <= 8.64e7
    ? Math.floor(diff / 1000 / 60 / 60) + ' часов назад'
    : diff > 8.64e7
    ? Math.floor(diff / 1000 / 60 / 60 / 24) + ' дней назад'
    : 'Ошибка времени';
}
