import { EventProps } from 'react-big-calendar';

import { COLORS } from '../constants/colors';
import { CustomEventProps } from '../types';

import './Event.css';

const Event = (props: EventProps<CustomEventProps>) => {
  const { author, colorId, title } = props.event;
  const bgColor = typeof colorId !== 'undefined'
    ? COLORS[colorId]
    : 'lightgrey';

  return (
    <div className='event-root' style={{ backgroundColor: bgColor }}>
      <div className='event-header'>
        <div className='event-author' title={author}>
          {author}
        </div>
        <div className='event-actions'>
          ✐ ┋
        </div>
      </div>
      <div className='event-body' title={title}>
        {title}
      </div>
    </div>
  );
};

export default Event;
