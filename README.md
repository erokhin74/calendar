# calendar
Adoption of react-big-calendar

## не забыть после клонирования
npm i

## src\Calendar\index.tsx\BigCalendar - основной компонент

Его пропсы:

```js
events={eventStore.events}
```
список заметок (начальное состояние берем из src\Calendar\events.ts)

```js
popup={true}
```
если все заметки непоместились в ячейке дня, то показывать их в попапе (иначе скроллинг)

```js
messages={MESSAGES}
```
список переопределений текстовых лейбов

```js
components={COMPONENTS}

const COMPONENTS = {
  month: {
    dateHeader: DateHeader
  },
  event: CustomEvent,
  dateCellWrapper: MonthBgEvent
};
```
список переопределений мелких компонентов

```js
views={VIEWS}
```
список доступности и переопределений крупных компонентов - представлений месяца, недели, дня

```js
culture='ru'
localizer={localizer}
```
параметры локализации

```js
startAccessor="start"
endAccessor="end"
```
названия полей или геттеры для начала и конца события (у нас заметки) в объекте, описывающем событие
```js
  {
    author: 'Петров И.И.',
    colorId: 0,
    start: moment('2024-04-08T10:00:00').toDate(),
    end: moment('2024-04-08T11:00:00').toDate(),
    title: 'Запросил у главбуха Фердер М.Н. справку НД-284'
  }
```

## COMPONENTS - кастомные компоненты

### src\Calendar\Event\index.tsx - заметка, отображаемая в списке заметок в ячейке дня

### src\Calendar\Event\MonthBgEvent\index.tsx - костыль для растягивания заметки на всю ячейку дня в случае единственной заметки в дне
это костыль потому что заметка отображается как бекграунд ячейки дня (dnd для такой заметки работать не будет)

### src\Calendar\DateHeader\index.tsx - заголовок ячейки дня (с кнопкой "+" для добавления новой заметки)
