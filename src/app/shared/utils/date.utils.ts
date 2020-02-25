import { ScullyRoute } from '@scullyio/ng-lib';

export const toTime = (date: string) => {
  return new Date(date).getTime();
};
export const byDate = (a: ScullyRoute, b: ScullyRoute) => {
  return toTime(a.date) - toTime(b.date);
};
