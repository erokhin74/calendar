import moment from 'moment';
import { EventProps } from 'react-big-calendar';

import { COLORS } from '../constants/colors';
import { CustomEventProps } from '../types';

import { useContext } from 'react';
import { Store } from '..';
import { getSingleEventDate } from '../dateEventMap';
import './Event.css';

const Event = (props: EventProps<CustomEventProps>) => {
  const { eventStore: { dateEventMap } } = useContext(Store);

  const dateStamp = moment(props.event.start).startOf('day').unix();
  const singleEvent = getSingleEventDate(dateStamp, dateEventMap);
  if (singleEvent) {
    return null;
  }

  return (
    <div className='event-root' style={{ backgroundColor: COLORS[props.event.colorId] }}>
      <div className='event-header'>
        <div className='event-title'>
          {props.event.author}
        </div>
        <div className='event-actions'>
          ✐ ┋
        </div>
      </div>
      <div className='event-body'>
        {props.event.title}
      </div>
    </div>
  );
};

export default Event;
