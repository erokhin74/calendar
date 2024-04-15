export interface CustomEventProps {
  author: string;
  colorId: number;
  allDay?: boolean;
  start: Date;
  end: Date;
  title: string;
}

export interface EventStore {
  events: CustomEventProps[],
  dateEventMap: Map<number, CustomEventProps[]>
}
