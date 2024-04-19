import moment from 'moment';
import 'moment/locale/ru';
import { Dispatch, SetStateAction, createContext, useState } from 'react';
import {
  Calendar as BigCalendar,
  momentLocalizer
} from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import DateHeader from './DateHeader';
import CustomEvent from './Event';
import CustomMonthView from './MonthView';
import { MESSAGES } from './constants/messages';
import { updateDateEventMap } from './dateEventMap';
import { EVENTS } from './events';
import { EventStore } from './types';

import './Calendar.css';

moment.locale("ru-RU");
// Жесткий способ начинать неделю с ПН, если обычный не работает
// moment.locale("ru-RU", {
// 	week: {
// 		dow: 1 //Monday is the first day of the week.
// 	}
// });

const localizer = momentLocalizer(moment)

const COMPONENTS = {
  month: {
    dateHeader: DateHeader
  },
  event: CustomEvent
};

const VIEWS = {
  month: CustomMonthView,
  week: true,
  day: true,
  agenda: true
};

const eventStore0: EventStore = {
  events: EVENTS,
  dateEventMap: updateDateEventMap(new Map(), EVENTS)
};

export const Store = createContext({
  eventStore: eventStore0,
  setEventStore: ((eventStore: EventStore) => eventStore) as Dispatch<SetStateAction<EventStore>>
});

export const Calendar = () => {
  const [eventStore, setEventStore] = useState<EventStore>(eventStore0);
  return (
    <Store.Provider value={{ eventStore, setEventStore }}>
      <div className='calendar-root'>
        <BigCalendar
          events={eventStore.events}
          popup={true}
          messages={MESSAGES}
          components={COMPONENTS}
          views={VIEWS}
          culture='ru'
          localizer={localizer}
          startAccessor="start"
          endAccessor="end"
          // toolbar={false}
        />
      </div>
    </Store.Provider>
  );
};
