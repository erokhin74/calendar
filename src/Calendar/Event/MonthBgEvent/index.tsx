import moment from 'moment';
import { useContext } from 'react';
import { DateCellWrapperProps } from 'react-big-calendar';

import { Store } from '../..';
import { COLORS } from '../../constants/colors';
import { getSingleEventDate } from '../../dateEventMap';
import './MonthBgEvent.css';

const MonthBgEvent = (dateCellWrapperProps: DateCellWrapperProps) => {
  const { eventStore: { dateEventMap } } = useContext(Store);
  const { value } = dateCellWrapperProps;
  const dateStamp = moment(value).startOf('day').unix();
  const singleEvent = getSingleEventDate(dateStamp, dateEventMap);

  const style = {
    display: 'flex',
    flex: 1,
    borderLeft: '1px solid #DDD',
  };
  
  return (
    <div style={style}>
      {singleEvent && (
        <div className='month-bg-event-root' style={{ backgroundColor: COLORS[singleEvent.colorId] }}>
          <div className='month-bg-event-header'>
            <div className='month-bg-event-title'>
              {singleEvent.author}
            </div>
            <div className='month-bg-event-actions'>
              ✐ ┋
            </div>
          </div>
          <div className='month-bg-event-body'>
            {singleEvent.title}
          </div>
        </div>
      )}
      {dateCellWrapperProps.children}
    </div>
  );
};

export default MonthBgEvent;
