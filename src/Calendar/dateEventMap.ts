import moment from 'moment';

import { CustomEventProps } from './types';

export const updateDateEventMap = (
  map: Map<number, CustomEventProps[]>,
  toAdd: CustomEventProps[]
) => toAdd.reduce((acc, event) => {
  const dateStamp = moment(event.start).startOf('day').unix();
  const dateEvents = acc.get(dateStamp) || [];
  if (!dateEvents.length) {
    acc.set(dateStamp, dateEvents);
  }
  dateEvents.push(event);
  return acc;
}, new Map(map));

export const getSingleEventDate = (
  dateStamp: number,
  dateEventMap: Map<number, CustomEventProps[]>
) => {
  const dateEvents = dateEventMap.get(dateStamp);
  return dateEvents?.length === 1 && dateEvents[0];
};
