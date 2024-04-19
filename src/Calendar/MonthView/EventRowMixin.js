import PropTypes from 'prop-types';
import EventCell from 'react-big-calendar/lib/EventCell';
import { isSelected } from 'react-big-calendar/lib/utils/selection';

// пн = 1, ..., пт = 1, сб = 0.5, вс = 0.5
const WORKDAY = 1;
const DAYOFF = 0.5;
const WEEK = 5 * WORKDAY + 2 * DAYOFF;

/* eslint-disable react/prop-types */
export default {
  propTypes: {
    slotMetrics: PropTypes.object.isRequired,

    selected: PropTypes.object,
    isAllDay: PropTypes.bool,

    accessors: PropTypes.object.isRequired,
    localizer: PropTypes.object.isRequired,
    components: PropTypes.object.isRequired,
    getters: PropTypes.object.isRequired,

    onSelect: PropTypes.func,
    onDoubleClick: PropTypes.func,
    onKeyPress: PropTypes.func,
  },

  defaultProps: {
    segments: [],
    selected: {},
  },

  renderEvent(props, event) {
    let {
      selected,
      isAllDay: _,
      accessors,
      getters,
      onSelect,
      onDoubleClick,
      onKeyPress,
      localizer,
      slotMetrics,
      components,
      resizable,
    } = props

    let continuesPrior = slotMetrics.continuesPrior(event)
    let continuesAfter = slotMetrics.continuesAfter(event)

    return (
      <EventCell
        event={event}
        getters={getters}
        localizer={localizer}
        accessors={accessors}
        components={components}
        onSelect={onSelect}
        onDoubleClick={onDoubleClick}
        onKeyPress={onKeyPress}
        continuesPrior={continuesPrior}
        continuesAfter={continuesAfter}
        slotStart={slotMetrics.first}
        slotEnd={slotMetrics.last}
        selected={isSelected(event, selected)}
        resizable={resizable}
      />
    )
  },

  renderSpan(slots, len, key, content = ' ') {
    const per = Math.abs(len) / WEEK * 100 + '%'

    return (
      <div
        key={key}
        className="rbc-row-segment"
        // IE10/11 need max-width. flex-basis doesn't respect box-sizing
        style={{ WebkitFlexBasis: per, flexBasis: per, maxWidth: per }}
      >
        {content}
      </div>
    )
  },
}
