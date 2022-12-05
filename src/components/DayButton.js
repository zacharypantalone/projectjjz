import React from 'react';

export const DayButton = props => {
  return (
    <button
      onClick={() => {
        props.handleClick(props.day.id);
      }}
      className='day-tile secondary-button'
    >
      {props.day.day}
    </button>
  );
};