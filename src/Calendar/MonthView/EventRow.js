import clsx from 'clsx';
import PropTypes from 'prop-types';
import React from 'react';

import EventRowMixin from './EventRowMixin';

const calcEventLength = (left) => [6, 7].includes(left) ? 0.5 : 1;
const calcGapLength = (left, gap) => left === 7 ? gap - 0.5 : gap;

class EventRow extends React.Component {
  render() {
    let {
      segments,
      slotMetrics: { slots },
      className,
    } = this.props

    let lastEnd = 1

    return (
      <div className={clsx(className, 'rbc-row')}>
        {segments.reduce((row, { event, left, right, span }, li) => {
          
          let key = '_lvl_' + li
          let gap = left - lastEnd

          let content = EventRowMixin.renderEvent(this.props, event)

          if (gap) row.push(EventRowMixin.renderSpan(slots, calcGapLength(left, gap), `${key}_gap`, ' ', left))

          row.push(EventRowMixin.renderSpan(slots, calcEventLength(left), key, content, left))

          lastEnd = right + 1

          return row
        }, [])}
      </div>
    )
  }
}

EventRow.propTypes = {
  segments: PropTypes.array,
  ...EventRowMixin.propTypes,
}

EventRow.defaultProps = {
  ...EventRowMixin.defaultProps,
}

export default EventRow
