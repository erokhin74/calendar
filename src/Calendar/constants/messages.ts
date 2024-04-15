export const MESSAGES = {
    date: 'Число',
    time: 'Время',
    event: 'Заметка',
    allDay: 'Весь день',
    week: 'Неделя',
    work_week: 'Рабочая неделя',
    day: 'День',
    month: 'Месяц',
    previous: '<',
    next: '>',
    yesterday: 'Вчера',
    tomorrow: 'Завтра',
    today: 'Сегодня',
    agenda: 'Повестка',
  
    noEventsInRange: 'Период не содержит заметок.',
    /**
     * params {total} count of remaining events 
     */
    showMore: (total: number) => `+${total} еще`,
};
