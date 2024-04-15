import { useCallback, useContext } from 'react';
import { DateHeaderProps } from 'react-big-calendar';

import { Store } from '..';

import { updateDateEventMap } from '../dateEventMap';
import './DateHeader.css';

const DateHeader = ({ date, label, drilldownView, onDrillDown }: DateHeaderProps) => {
  const { setEventStore } = useContext(Store);
  const dateTitle = !drilldownView
    ? <div>{label}</div>
    : <button
      type="button"
      className="rbc-button-link"
      onClick={onDrillDown}
      role="cell"
    >
      {label}
    </button>;

  const onAddEvent = useCallback(() => {
    setEventStore((eventStore) => {
      const eventsToAdd = [{
        ...eventStore.events[1],
        start: date,
        end: date
      }];
      return ({
        events: [
          ...eventStore.events,
          ...eventsToAdd
        ],
        dateEventMap: updateDateEventMap(eventStore.dateEventMap, eventsToAdd)
      });
    })
  }, [date, setEventStore]);

  return (
    <div className='dateHeader-root'>
      {dateTitle}
      <button
        type="button"
        className="rbc-button-link"
        onClick={onAddEvent}
        role="cell"
      >
        +
      </button>
    </div>
  );
};

export default DateHeader;
